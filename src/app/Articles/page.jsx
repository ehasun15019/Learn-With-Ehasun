import ArticleHeading from "@/components/ArticleHeading";
import TabsArticle from "@/components/TabsArticle";

export default function Articles() {
  return (
    <div className="container mx-auto">
      {/* Active Article Heading */}
      <ArticleHeading />

      {/* Tabs */}
      <TabsArticle />
    </div>
  );
}
