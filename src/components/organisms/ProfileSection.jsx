import SectionTitle from "@src/components/atoms/SectionTitle";
import ProfileInfoRow from "@src/components/molecules/ProfileInfoRow";
import { profileInfo } from "@src/data/profileData";

export default function ProfileSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 lg:px-24 py-20">
      <div className="max-w-7xl w-full">
        {/* Judul */}
        <SectionTitle bgText="Profile" mainText="Profile" highlightText="Saya" />

        {/* Konten */}
        <div className="custom-shape-hover grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gray-50 rounded-2xl border border-gray-200 p-8 shadow-lg">
          {/* Kiri: Deskripsi */}
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">
              {profileInfo.tagline}
            </h3>
            {profileInfo.summaryParagraphs.map((para, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </div>

          {/* Kanan: Info Pribadi */}
          <div className="relative z-10 space-y-4 text-sm text-gray-800">
            {profileInfo.personalDetails.map((detail, index) => (
              <ProfileInfoRow key={index} {...detail} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
