from PIL import Image, ImageChops

def autocrop_image_with_threshold(input_path, output_path, threshold=20):
    print(f"Processing {input_path}...")
    img = Image.open(input_path)
    
    if img.mode != 'RGB' and img.mode != 'RGBA':
        img = img.convert('RGBA')

    # Background color based on top-left pixel
    bg_color = img.getpixel((0,0))
    bg = Image.new(img.mode, img.size, bg_color)
    
    diff = ImageChops.difference(img, bg)
    
    # Convert to grayscale to apply threshold
    diff_gray = diff.convert('L')
    
    # Apply threshold: pixels with difference < threshold become 0 (black), else 255 (white)
    diff_bw = diff_gray.point(lambda p: p > threshold and 255)
    
    bbox = diff_bw.getbbox()
    
    if bbox:
        x1, y1, x2, y2 = bbox
        pad = 2 # minimal padding
        x1 = max(0, x1 - pad)
        y1 = max(0, y1 - pad)
        x2 = min(img.width, x2 + pad)
        y2 = min(img.height, y2 + pad)
        bbox = (x1, y1, x2, y2)
        
        cropped_img = img.crop(bbox)
        
        if output_path.endswith('.jpeg') or output_path.endswith('.jpg'):
            cropped_img = cropped_img.convert('RGB')
            cropped_img.save(output_path, quality=95)
        else:
            cropped_img.save(output_path)
        print(f"Saved cropped image to {output_path} with bbox {bbox}")
    else:
        print("Image is entirely background color. No crop performed.")

# Re-crop FHS logo from the original docs/fhs.jpeg
autocrop_image_with_threshold("docs/fhs.jpeg", "public/logos/fhs.jpeg", threshold=30)

# Re-crop Rice Mill logo
autocrop_image_with_threshold("docs/bangladesh_auto_rice_mill_logo.png", "public/logos/rice-mill.png", threshold=30)
