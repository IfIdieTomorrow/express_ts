export interface BodyProps {
  section_id: string;
  publish_date: Date;
  translation_goals: string[];
  is_korea: boolean;
  is_global: boolean;
  is_pinned_korea: boolean;
  is_pinned_global: boolean;
  is_hidden: boolean;
}

export type Category = "announcements" | "faq";

export type CategorySectionData = {
  category_id: Category;
  section_ids: string[];
};
