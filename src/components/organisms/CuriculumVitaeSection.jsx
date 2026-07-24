import { useState } from "react";
import SectionTitle from "@src/components/atoms/SectionTitle";
import ActionButton from "@src/components/atoms/ActionButton";
import TimelineCard from "@src/components/molecules/TimelineCard";
import { pendidikanData, pengalamanKerjaData } from "@src/data/cvData";

export default function CuriculumVitaeSection() {
  const [visibleItems, setVisibleItems] = useState(2);

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 lg:px-24 py-20">
      <div className="max-w-7xl w-full">
        <SectionTitle bgText="Riwayat" mainText="Riwayat" highlightText="Hidup" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pendidikan */}
          <div>
            <h3 className="text-2xl text-center font-bold">Pendidikan</h3>
            <div className="mt-10">
              {pendidikanData.map((item, index) => (
                <TimelineCard key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Pengalaman Kerja */}
          <div>
            <h3 className="text-2xl text-center font-bold">Pengalaman Kerja</h3>
            <div className="mt-10 space-y-6">
              {pengalamanKerjaData.slice(0, visibleItems).map((item, index) => (
                <TimelineCard key={index} {...item} />
              ))}
            </div>

            {/* Tombol Load More */}
            {visibleItems < pengalamanKerjaData.length && (
              <div className="text-center mt-6">
                <ActionButton
                  onClick={() => setVisibleItems((prev) => prev + 2)}
                >
                  Load More
                </ActionButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
