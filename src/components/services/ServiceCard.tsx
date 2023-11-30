"use client";

interface Props {
  image: string;
  title: string;
  description: string;
}

export default function ServiceCard({ image, title, description }: Props) {
  return (
    <div className="relative flex w-[200px] flex-col gap-[12px] bg-gray-100 text-center">
      <img
        src={image}
        alt={title}
        className="absolute left-[50px] top-[-50px] h-[100px] w-[100px] object-cover"
      />
      <div className="mt-[60px] flex flex-col gap-[5px] px-[15px] pb-[15px]">
        <h3
          className="text-[18px] font-bold"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-[12px]">{description}</p>
      </div>
    </div>
  );
}
