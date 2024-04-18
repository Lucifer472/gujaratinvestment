import { CategoryBox } from "@/components/etc/category-box";
import { getBlogsByCat } from "@/lib/blog";
import NoArticleFound from "@/components/views/no-article";
import ArticleListView from "@/components/views/article-list-view";
import { Pagination } from "@/components/etc/pagination";
import { Metadata } from "next";
import ClientWrapper from "@/components/wrappers/client-wrapper";
import { Ad1, Ad2, Ad3 } from "@/components/ads/ads";

export const metadata: Metadata = {
  title: "Home Loan - Categories",
  robots: {
    index: true,
    follow: true,
  },
};

const ArticlePage = async ({ searchParams }: { searchParams: any }) => {
  const searchPage = parseInt(searchParams.page);
  const page = isNaN(searchPage) ? 1 : searchPage;
  const category = "home";

  const data = await getBlogsByCat(category, page);
  if (!data) return;
  data.pop();

  return (
    <div className="min-w-[340px] w-[90%] max-w-[1024px] mx-auto flex flex-col items-start justify-start">
      <ClientWrapper>
        <Ad1 />
      </ClientWrapper>
      <div className="flex items-center justify-between w-full pb-4 border-b border-gray-300">
        <h2 className="text-xl font-semibold">Articles</h2>
        <CategoryBox category={category} />
      </div>
      <ClientWrapper>
        <Ad2 />
      </ClientWrapper>
      <div className="w-full flex flex-col items-start gap-y-4 my-2">
        {data.length > 0 ? (
          data.map((item, index) => <ArticleListView key={index} item={item} />)
        ) : (
          <NoArticleFound />
        )}
        {data.length > 0 && (
          <Pagination
            isBack={page > 1}
            isNext={data.length !== 11}
            page={page}
          />
        )}
        <ClientWrapper>
          <Ad3 />
        </ClientWrapper>
      </div>
    </div>
  );
};

export default ArticlePage;
