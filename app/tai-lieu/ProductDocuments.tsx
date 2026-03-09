export default function ProductDocuments() {
    const documents = [
      {
        title: "TCCS 01 - MITAKA1000",
        href: "/files/pdf/tccs-01-mitaka1000.pdf",
      },
      {
        title: "TCCS 02 - Daichi no Tomo",
        href: "/files/pdf/tccs-02-daichi-no-tomo.pdf",
      },
      {
        title: "TCCS 03 - BF-NATURAL",
        href: "/files/pdf/tccs-03-bf-natural.pdf",
      },
      {
        title: "TCCS 04 - Lake Power",
        href: "/files/pdf/tccs-04-lake-power.pdf",
      },
      {
        title: "TCCS 05 - BK-OILBUSTER",
        href: "/files/pdf/tccs-05-bk-oilbuster.pdf",
      },
      {
        title: "TCCS 06 - BK Partner",
        href: "/files/pdf/tccs-06-bk-partner.pdf",
      },
      {
        title: "TCCS 07 - Daichi no Tomo 500",
        href: "/files/pdf/tccs-07-daichi-no-tomo-500.pdf",
      },
      {
        title: "TCCS 08 - MITAKA3000",
        href: "/files/pdf/tccs-08-mitaka3000.pdf",
      },
      {
        title: "TCCS 09 - NIOI ZERO",
        href: "/files/pdf/tccs-09-nioi-zero.pdf",
      },
      {
        title: "TCCS 10 - SP 10-15-20",
        href: "/files/pdf/tccs-10-sp-10-15-20.pdf",
      },
      {
        title: "TCCS 11 - S-Power",
        href: "/files/pdf/tccs-11-s-power.pdf",
      },
      {
        title: "TCCS 12 - MITAKA1200",
        href: "/files/pdf/tccs-12-mitaka1200.pdf",
      },
    ];
  
    return (
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[--text-color] mb-8 mt-4">
          Tài liệu công bố sản phẩm
        </h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {documents.map((doc, index) => (
            <a
              key={index}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-800 font-semibold group-hover:text-green-700 transition">
                  {doc.title}
                </span>
  
                <span className="text-sm text-gray-500 group-hover:text-green-600 transition">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    );
  }