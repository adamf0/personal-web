export const calculateAge = (birthDateStr, suffix = null) => {
  const birthDate = new Date(birthDateStr);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const currentMonth = today.getMonth();

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return suffix ? `${age} ${suffix}` : age;
};

export const formatPhoneNumber = (numberStr) => {
  if (!numberStr) return "-";
  let cleaned = numberStr.replace(/\D/g, "");
  if (cleaned.startsWith("08")) {
    cleaned = "+62" + cleaned.slice(1);
  }
  return cleaned.replace(/^(\+62)(\d{3})(\d{4})(\d{4})$/, "$1$2-$3-$4");
};

export const profileInfo = {
  name: "Adam Furqon",
  tagline: "Creativity bleeds from the pen of inspiration.",
  role: "Programmer",
  experienceYears: "3 tahun",
  specialization: "pengembangan aplikasi backend web",
  summaryParagraphs: [
    "Saya adalah Programmer dengan pengalaman 3 tahun di bidang pengembangan aplikasi backend web. Saya terbiasa menangani analisis sistem, perancangan database, pemrograman, hingga deployment dan pengujian.",
    "Saya berpengalaman dalam menganalisis kebutuhan klien terhadap sistem, merancang arsitektur pemrograman dan implementasi solusi teknis yang efektif. Saya juga aktif berkolaborasi dengan tim untuk memastikan setiap solusi yang diterapkan mendukung transformasi digital perusahaan dengan menggunakan teknologi terbaru."
  ],
  personalDetails: [
    { label: "Nama Lengkap", value: "Adam Furqon", type: "text" },
    { label: "Usia", value: calculateAge("1998-12-07", "Tahun"), type: "text" },
    { label: "Bahasa", value: "Bahasa Indonesia", type: "text" },
    {
      label: "No. HP",
      value: "087780065446",
      formatted: formatPhoneNumber("087780065446"),
      type: "phone"
    },
    { label: "Email", value: "adamilkom00@gmail.com", type: "email" },
    {
      label: "Alamat",
      value: "Ciheuleut RT 04 RW 09, Baranangsiang, Bogor Timur, Jawa Barat",
      type: "text"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/adamf213",
      url: "https://linkedin.com/in/adamf213",
      type: "link"
    }
  ]
};
