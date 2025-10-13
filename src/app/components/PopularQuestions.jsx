const PopularQuestions = () => {
    const questions = [
        {
            question: 'What tests can you book from BookMyCure?',
            answers: [
                {
                    title: 'Health Packages',
                    desc: 'Affordable preventive and full-body health checkups starting from Rs. 1,499, with free home sample collection and instant WhatsApp booking.'
                },
                {
                    title: 'Blood Tests',
                    desc: 'Hundreds of tests including CBC, LFT, and Lipid Profile. Compare prices, get discounts, and view reports online.'
                },
                {
                    title: 'Urine Tests',
                    desc: 'Book routine urine tests and culture profiles with easy online booking and accurate lab results.'
                },
                {
                    title: 'MRI Scan',
                    desc: 'Book 1.5T or 3T MRI scans across Pakistan at discounted prices with optional doctor report review.'
                },
                {
                    title: 'Ultrasound',
                    desc: 'Verified diagnostic centers offering Ultrasound & Sonography services from Rs. 999 onward.'
                },
                {
                    title: 'CT Scan',
                    desc: 'Advanced multi-slice CT scans with 3D reconstruction and low radiation exposure from Rs. 3,999.'
                },
                {
                    title: 'PET Scan',
                    desc: 'PET-CT scans for accurate cancer detection, staging, and monitoring — through trusted hospitals.'
                },
                {
                    title: 'X-Ray',
                    desc: 'Quick and affordable X-rays starting from Rs. 499, with same-day report delivery.'
                }
            ]
        },
        {
            question: 'What information can you get from BookMyCure?',
            answers: [
                {
                    title: 'Diagnostic Centers Near You',
                    desc: 'Find trusted labs and diagnostic centers with address, test prices, discounts, and contact info — all in one place.'
                },
                {
                    title: 'Search & Compare Lab Tests',
                    desc: 'Compare lab test prices from multiple diagnostic centers and choose the most reliable and affordable option.'
                },
                {
                    title: 'Aesthetic Clinic Services',
                    desc: 'Book certified aesthetic treatments like laser therapy, skin rejuvenation, and hair restoration easily.'
                },
                {
                    title: 'Test Information',
                    desc: 'Access verified guides explaining medical tests clearly, so you understand before booking.'
                }
            ]
        },
        {
            question: 'Service Availability — BookMyCure',
            answers: [
                {
                    title: 'Citywide Lab Network',
                    desc: 'Access trusted labs and diagnostic centers across Lahore for convenient, reliable testing.'
                },
                {
                    title: 'At-Home Sample Collection',
                    desc: 'Enjoy free home sample collection by trained professionals ensuring safety and hygiene.'
                },
                {
                    title: 'Instant Test Comparison & Booking',
                    desc: 'Search, compare, and instantly book the most affordable and nearby lab test with ease.'
                },
                {
                    title: 'Aesthetic & Wellness Clinics',
                    desc: 'Certified professionals offer skin, hair, and laser treatments at verified partner clinics.'
                }
            ]
        }
    ]

    return (
        <section className="bg-gradient-to-br from-purple-50 to-purple-100">
            <div className="bg-brand">
                <div className="max-w-screen-xl mx-auto px-4 py-3">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        BookMyCure — Pakistan’s Trusted Healthcare Booking Platform
                    </h2>
                    <p className="text-gray-100 text-base md:text-lg leading-relaxed">
                        BookMyCure is Pakistan’s first platform to compare prices of lab tests and aesthetic treatments.
                        Find trusted labs and clinics, explore discounts, and book instantly via WhatsApp — with free doctor consultations before and after your appointment.
                    </p>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto px-4 py-3 space-y-6">
                {questions.map((q, i) => (
                    <div
                        key={i}
                        className="overflow-hidden"
                    >
                        <h3 className="text-xl md:text-2xl font-semibold text-brand mb-4">{q.question}</h3>
                        <span className="text-purple-600 font-bold text-xl">
                        </span>
                        <div className="px-6 pb-6 space-y-4 text-gray-700">
                            {q.answers.map((a, j) => (
                                <div key={j}>
                                    <p className="font-medium text-orange-600">{a.title}</p>
                                    <p className="text-sm md:text-base leading-relaxed">{a.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PopularQuestions
