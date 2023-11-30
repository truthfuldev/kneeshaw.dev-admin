import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import { Input } from "@/components/ui/input";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Budget`,
  description: `${SITE_TITLE} - Budget`
};

export default function Budget() {
  return (
    <section className="mt-[100px] flex h-auto w-full flex-col gap-[36px] rounded-md border border-black p-4">
      <h2 className="ml-[24px] mt-[24px] text-[36px] font-[700]">
        Budget type & Rate
      </h2>

      <div className="flex h-auto flex-row items-center justify-around rounded-lg bg-gray-200 p-12">
        <div className="w-[300px] rounded-md border border-black py-6 text-center text-[28px] font-[600]">
          Hourly Rate
        </div>

        <div className="flex flex-col gap-[48px]">
          <div className="flex flex-row items-center gap-[36px]">
            <p className="text-[24px] font-[500]">minium:</p>

            <div className="flex flex-row items-center gap-[12px]">
              <div className="relative flex max-w-[180px]">
                <Input
                  placeholder="15"
                  className="text-center text-[24px] font-[700] "
                />

                <div className="absolute right-[5px] top-[4px]">
                  <TiArrowSortedUp />
                  <TiArrowSortedDown />
                </div>
              </div>

              <span className="text-[18px] font-[400]">$</span>
            </div>
          </div>

          <div className="flex flex-row items-center gap-[32px]">
            <p className="text-[24px] font-[500]">maxium:</p>

            <div className="flex flex-row items-center gap-[12px]">
              <div className="relative flex max-w-[180px]">
                <Input
                  placeholder="30"
                  className="text-center text-[24px] font-[700] "
                />

                <div className="absolute right-[5px] top-[4px]">
                  <TiArrowSortedUp />
                  <TiArrowSortedDown />
                </div>
              </div>

              <span className="text-[18px] font-[400]">$</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-[24px] flex h-auto flex-row items-center justify-around rounded-lg bg-gray-200 p-12">
        <div className="w-[300px] rounded-md border border-black py-6 text-center text-[28px] font-[600]">
          Project Budget
        </div>

        <div className="flex flex-col gap-[48px]">
          <div className="flex flex-row items-center gap-[36px]">
            <p className="text-[24px] font-[500]">minium:</p>

            <div className="flex flex-row items-center gap-[12px]">
              <div className="relative flex max-w-[180px]">
                <Input
                  placeholder="300"
                  className="text-center text-[24px] font-[700] "
                />

                <div className="absolute right-[5px] top-[4px]">
                  <TiArrowSortedUp />
                  <TiArrowSortedDown />
                </div>
              </div>

              <span className="text-[18px] font-[400]">$</span>
            </div>
          </div>

          <div className="flex flex-row items-center gap-[32px]">
            <p className="text-[24px] font-[500]">maxium:</p>

            <div className="flex flex-row items-center gap-[12px]">
              <div className="relative flex max-w-[180px]">
                <Input
                  placeholder="5000"
                  className="text-center text-[24px] font-[700] "
                />

                <div className="absolute right-[5px] top-[4px]">
                  <TiArrowSortedUp />
                  <TiArrowSortedDown />
                </div>
              </div>

              <span className="text-[18px] font-[400]">$</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
