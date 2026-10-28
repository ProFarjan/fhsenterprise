from PIL import Image, ImageChops

def autocrop_image(input_path, output_path):
    print(f"Processing {input_path}...")
    img = Image.open(input_path)
    
    # Create a background image based on the top-left pixel
    bg = Image.new(img.mode, img.size, img.getpixel((0,0)))
    diff = ImageChops.difference(img, bg)
    
    # If it's RGBA, convert difference to RGB for getbbox to ignore alpha differences
    if diff.mode == 'RGBA':
        diff = diff.convert('RGB')
        
    bbox = diff.getbbox()
    
    if bbox:
        # Give it a small 5px padding if possible
        x1, y1, x2, y2 = bbox
        pad = 5
        x1 = max(0, x1 - pad)
        y1 = max(0, y1 - pad)
        x2 = min(img.width, x2 + pad)
        y2 = min(img.height, y2 + pad)
        bbox = (x1, y1, x2, y2)
        
        cropped_img = img.crop(bbox)
        
        # Save
        # If input was JPEG, we should convert back to RGB if it was converted to RGBA
        if output_path.endswith('.jpeg') or output_path.endswith('.jpg'):
            cropped_img = cropped_img.convert('RGB')
            cropped_img.save(output_path, quality=95)
        else:
            cropped_img.save(output_path)
        print(f"Saved cropped image to {output_path}")
    else:
        print("Image is entirely background color. No crop performed.")

# Crop FHS logo
autocrop_image("docs/fhs.jpeg", "public/logos/fhs.jpeg")

# Crop Rice Mill logo (save it to public/logos/rice-mill.png)
autocrop_image("docs/bangladesh_auto_rice_mill_logo.png", "public/logos/rice-mill.png")
