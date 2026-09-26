import ComingSoon from "@/components/admin/ComingSoon";
import { MessagesIcon } from "@/components/admin/icons";

export default function AdminMessagesPage() {
  return (
    <ComingSoon
      icon={MessagesIcon}
      title="Messages"
      description="Read and respond to contact form submissions from across the MR Group sites."
    />
  );
}
