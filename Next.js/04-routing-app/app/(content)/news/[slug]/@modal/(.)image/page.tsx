
import ModalBackdrop from "@/app/components/modal-backdrop";
import { getNewsItem } from "@/app/lib/news";
import { notFound } from "next/navigation"

interface ImageProps {
  params: Promise<{ slug: string }>
}

export default async function InterceptedImagePage({ params }: ImageProps) {
  const { slug } = await params
  const newsItem = await getNewsItem(slug)

  if (!newsItem) {
    notFound()
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  ) 
}