import SectionTitle from "@src/components/atoms/SectionTitle";
import CustomCard from "@src/components/molecules/CustomCard";
import { certificateData } from "@src/data/certificateData";

export default function CertificateSection() {
  const sertifikat = certificateData.filter((item) => item.type === "sertifikat");
  const pelatihan = certificateData.filter((item) => item.type === "pelatihan");

  const downloadFile = (fileUrl, fileName) => {
    if (!fileUrl || !fileName) return;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = `${fileName}.pdf`;
    link.click();
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 lg:px-24 py-20">
      <div className="max-w-7xl w-full">
        <SectionTitle bgText="Sertifikat" mainText="Sertifikat" highlightText="Pelatihan" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sertifikat */}
          <div>
            <div className="mt-10">
              <CustomCard title="Sertifikat">
                <ul className="space-y-4 text-sm text-gray-700">
                  {sertifikat.map((s) => (
                    <li
                      key={s.id}
                      className="cursor-pointer hover:text-green-600 transition"
                      onClick={() => downloadFile(s.fileUrl, s.file_name)}
                    >
                      <p className="font-semibold">{s.title}</p>
                      <p className="text-green-600">{s.from}</p>
                      <p className="text-xs text-gray-500">{s.date}</p>
                    </li>
                  ))}
                </ul>
              </CustomCard>
            </div>
          </div>

          {/* Pelatihan */}
          <div>
            <div className="mt-10">
              <CustomCard title="Pelatihan">
                <ul className="space-y-4 text-sm text-gray-700">
                  {pelatihan.map((s) => (
                    <li
                      key={s.id}
                      className="cursor-pointer hover:text-green-600 transition"
                      onClick={() => downloadFile(s.fileUrl, s.file_name)}
                    >
                      <p className="font-semibold">{s.title}</p>
                      <p className="text-green-600">{s.from}</p>
                      <p className="text-xs text-gray-500">{s.date}</p>
                    </li>
                  ))}
                </ul>
              </CustomCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
