import { Bookmark, BookmarkCheck } from "lucide-react";
import { useActivity, ActivityKey } from "@/hooks/use-student-activity";
import { Button } from "@/components/ui/button";

interface SaveButtonProps {
  storeKey: ActivityKey;
  path: string;
  title: string;
  label?: string;
}

/** Save / unsave a university or comparison to the student dashboard. */
const SaveButton = ({ storeKey, path, title, label = "Save" }: SaveButtonProps) => {
  const { items, toggle } = useActivity(storeKey);
  const saved = items.some((i) => i.path === path);

  return (
    <Button
      size="sm"
      variant={saved ? "secondary" : "ghost"}
      onClick={() => toggle({ path, title })}
      aria-pressed={saved}
      aria-label={saved ? `Remove ${title} from saved` : `Save ${title}`}
      className="gap-1.5"
    >
      {saved ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
      {saved ? "Saved" : label}
    </Button>
  );
};

export default SaveButton;
