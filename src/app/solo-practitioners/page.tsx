import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SoloPractitioners() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-blue-100 to-indigo-200 py-16">
      {/* Hero Section */}
      <section className="flex flex-wrap items-center container mx-auto px-4">
        {/* Left Section (Text and Call to Action) */}
        <div className="w-full lg:w-1/2 px-4 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-6">
            Goodbye, <br /> Case <span className="text-blue-500">Chaos!</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Tired of tracking your legal matters manually? <br />
            With Provakil&apos;s Litigation Management Suite, efficiently manage your cases online &amp; use AI to fuel your growth.
          </p>
          <div>
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg"
            >
              <Link href="/request-demo">
                Request Demo
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0">
          <Image
            src="/giammarco-boscaro-OPzWvgL-upY-unsplash.jpg"
            alt="Provakil's Litigation Management Suite showcasing online case workspace, case notifications, and hearing schedule from daily causelist."
            width={674}
            height={630}
            priority
            className="rounded-lg"
          />
        </div>
      </section>

      {/* New Section: Love Numbers? */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-12">
          Love Numbers? You &amp; Us Both!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              number: "37",
              suffix: "%",
              text: "Average annual financial growth reported by practising advocates"
            },
            {
              number: "24",
              suffix: "%",
              text: "Reduction in risks due to timely updates & reminders"
            },
            {
              number: "500",
              suffix: "+",
              text: "Hours saved per year on administrative work"
            }
          ].map((stat, index) => (
            <Card key={index} className="transform hover:scale-105 transition-all duration-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl font-extrabold text-blue-600 mb-4">
                  {stat.number}<span className="text-blue-500">{stat.suffix}</span>
                </h3>
                <p className="text-lg text-gray-700">{stat.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* New Section: Instant Alerts */}
      <Card className="bg-white border-none shadow-none">
        <CardContent className="p-0">
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center">
                {/* Left Column (Image) */}
                <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                  <Image
                    src="/giammarco-boscaro-OPzWvgL-upY-unsplash.jpg"
                    alt="Instant alerts to lawyers about case orders &amp; listings updates, office reports, and court announcements from 10,000+ forums on their phones."
                    width={690}
                    height={646}
                    priority
                    className="rounded-lg"
                  />
                </div>

                {/* Right Column (Text and Information) */}
                <div className="w-full lg:w-1/2 px-4">
                  <p className="text-lg font-semibold text-left text-blue-600 mb-4">Instant Alerts</p>
                  <h2 className="text-3xl font-extrabold text-left text-blue-700 mb-6">Transform your tactics</h2>
                  <h3 className="text-lg text-gray-700 mb-8">
                    No missing orders &amp; updates. Get order &amp; listing notifications from 10,000+ forums instantly on your phone.
                  </h3>

                  {/* Bullet Points */}
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <img className="w-5 h-5 mr-3" src="/images/landing/correct_icon.svg" alt="Check mark icon" />
                      <p className="text-sm text-gray-600">
                        10,000+ courts, trademark registries, and patent registries covered.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <img className="w-5 h-5 mr-3" src="/images/landing/correct_icon.svg" alt="Check mark icon" />
                      <p className="text-sm text-gray-600">Get real-time case alerts on your phone and mail.</p>
                    </div>
                    <div className="flex items-start">
                      <img className="w-5 h-5 mr-3" src="/images/landing/correct_icon.svg" alt="Check mark icon" />
                      <p className="text-sm text-gray-600">
                        Develop innovative litigation tactics using information available to you ahead of others.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <img className="w-5 h-5 mr-3" src="/images/landing/correct_icon.svg" alt="Check mark icon" />
                      <p className="text-sm text-gray-600">
                        Share order &amp; listing updates with clients via automatic notifications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </CardContent>
      </Card>

      {/* Daily Causelists Section */}
      <Card className="bg-gradient-to-r from-white to-gray-50 border-none shadow-none">
        <CardContent className="p-0">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center">
                {/* Left Column (Text and Information) */}
                <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                  <div className="max-w-lg">
                    <p className="text-lg font-semibold text-left text-blue-600 mb-4">Daily Causelists</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-left text-blue-700 mb-6">
                      Plan ahead with curated causelists
                    </h2>
                    <h3 className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Save on your time and resources with custom-curated causelists specially designed to cater to the diverse formats of different forums.
                    </h3>
                    <div className="space-y-6">
                      {/* Bullet Points with Enhanced Styling */}
                      <div className="flex items-start transform hover:scale-105 transition-transform duration-200">
                        <img className="w-5 h-5 mr-3" src="/images/landing/correct_icon.svg" alt="Check mark icon" />
                        <p className="text-sm text-gray-600 hover:text-blue-600">
                          Plan your schedule proactively with personalized causelists.
                        </p>
                      </div>
                      <div className="flex items-start transform hover:scale-105 transition-transform duration-200">
                        <img className="w-5 h-5 mr-3" src="/images/landing/correct_icon.svg" alt="Check mark icon" />
                        <p className="text-sm text-gray-600 hover:text-blue-600">
                          Prevent overlapping engagements. Take action to resolve conflicts or reschedule as necessary.
                        </p>
                      </div>
                      <div className="flex items-start transform hover:scale-105 transition-transform duration-200">
                        <img className="w-5 h-5 mr-3" src="/images/landing/correct_icon.svg" alt="Check mark icon" />
                        <p className="text-sm text-gray-600 hover:text-blue-600">
                          Customize your causelist with fields you want to see, like forum, bench, item, etc.
                        </p>
                      </div>
                      <div className="flex items-start transform hover:scale-105 transition-transform duration-200">
                        <img className="w-5 h-5 mr-3" src="/images/landing/correct_icon.svg" alt="Check mark icon" />
                        <p className="text-sm text-gray-600 hover:text-blue-600">
                          Get a calendar &amp; summarized causelist view to scan essential details.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column (Image) */}
                <div className="w-full lg:w-1/2 px-4">
                  <div className="relative transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/giammarco-boscaro-OPzWvgL-upY-unsplash.jpg"
                      alt="Personalized daily causelists for advocates with their cases added on Provakil. Showing a daily, weekly, and monthly view."
                      width={690}
                      height={646}
                      priority
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </CardContent>
      </Card>

      {/* Online Workspace Section */}
      <Card className="bg-white border-none shadow-none">
        <CardContent className="p-0">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center">
                {/* Left Column (Image) */}
                <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                  <div className="relative transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/giammarco-boscaro-OPzWvgL-upY-unsplash.jpg"
                      alt="Provakil's Case Management software helps lawyers manage cases online with details, documents, updates, and notes in an organized manner."
                      width={690}
                      height={646}
                      priority
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                </div>

                {/* Right Column (Text and Information) */}
                <div className="w-full lg:w-1/2 px-4">
                  <div className="max-w-lg">
                    <p className="text-lg font-semibold text-left text-blue-600 mb-4">Online Workspace</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-left text-blue-700 mb-6">
                      Digitize your caseload
                    </h2>
                    <h3 className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Manage your cases efficiently in a dedicated digital space. Updates, notices, and orders, all in one place.
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start transform hover:scale-105 transition-transform duration-200">
                        <img className="w-5 h-5 mr-3" src="/images/landing/correct_icon.svg" alt="Check mark icon" />
                        <p className="text-sm text-gray-600 hover:text-blue-600">
                          Visualize the entire case journey with a descriptive timeline.
                        </p>
                      </div>
                      <div className="flex items-start transform hover:scale-105 transition-transform duration-200">
                        <img className="w-5 h-5 mr-3" src="/images/landing/correct_icon.svg" alt="Check mark icon" />
                        <p className="text-sm text-gray-600 hover:text-blue-600">
                          Search for cases in your repository using the forum name, case name, number, etc.
                        </p>
                      </div>
                      <div className="flex items-start transform hover:scale-105 transition-transform duration-200">
                        <img className="w-5 h-5 mr-3" src="/images/landing/correct_icon.svg" alt="Check mark icon" />
                        <p className="text-sm text-gray-600 hover:text-blue-600">
                          Add notes and labels to flag essential details and categorize information.
                        </p>
                      </div>
                      <div className="flex items-start transform hover:scale-105 transition-transform duration-200">
                        <img className="w-5 h-5 mr-3" src="/images/landing/correct_icon.svg" alt="Check mark icon" />
                        <p className="text-sm text-gray-600 hover:text-blue-600">
                          Access your archived case documents in an organized manner.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </CardContent>
      </Card>

      {/* Client Communications Section */}
      <Card className="bg-gradient-to-r from-white to-gray-50 border-none shadow-none">
        <CardContent className="p-0">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center">
                {/* Left Column (Text and Information) */}
                <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                  <div className="max-w-lg">
                    <p className="text-lg font-semibold text-left text-blue-600 mb-4">Client Communications</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-left text-blue-700 mb-6">
                      Enhancing client interaction
                    </h2>
                    <h3 className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Deliver instant, insightful notifications to clients, keeping them informed at every step.
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start transform hover:scale-105 transition-transform duration-200">
                        <img className="w-5 h-5 mr-3" src="/images/landing/correct_icon.svg" alt="Check mark icon" />
                        <p className="text-sm text-gray-600 hover:text-blue-600">
                          Share order and listing updates with clients via automatic notifications.
                        </p>
                      </div>
                      <div className="flex items-start transform hover:scale-105 transition-transform duration-200">
                        <img className="w-5 h-5 mr-3" src="/images/landing/correct_icon.svg" alt="Check mark icon" />
                        <p className="text-sm text-gray-600 hover:text-blue-600">
                          Attach clients with your cases on your workspace and maintain a secure repository.
                        </p>
                      </div>
                      <div className="flex items-start transform hover:scale-105 transition-transform duration-200">
                        <img className="w-5 h-5 mr-3" src="/images/landing/correct_icon.svg" alt="Check mark icon" />
                        <p className="text-sm text-gray-600 hover:text-blue-600">
                          Configure specific notification settings as per your preference for different clients.
                        </p>
                      </div>
                      <div className="flex items-start transform hover:scale-105 transition-transform duration-200">
                        <img className="w-5 h-5 mr-3" src="/images/landing/correct_icon.svg" alt="Check mark icon" />
                        <p className="text-sm text-gray-600 hover:text-blue-600">
                          Automate these crucial updates for clients seamlessly through SMS and email communications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column (Image) */}
                <div className="w-full lg:w-1/2 px-4">
                  <div className="relative transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/giammarco-boscaro-OPzWvgL-upY-unsplash.jpg"
                      alt="Provakil's AI-based software helps advocates share automated order and listing updates with their clients."
                      width={690}
                      height={646}
                      priority
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </CardContent>
      </Card>

      {/* Mobility Section */}
      <Card className="bg-white border-none shadow-none">
        <CardContent className="p-0">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center">
                {/* Left Column (Image) */}
                <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                  <div className="relative transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/giammarco-boscaro-OPzWvgL-upY-unsplash.jpg"
                      alt="Provakil's software is accessible over Android, iOS, & Windows across all operating browsers and is available on mobile, tablet, & computer."
                      width={690}
                      height={646}
                      priority
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                </div>

                {/* Right Column (Text and Information) */}
                <div className="w-full lg:w-1/2 px-4">
                  <div className="max-w-lg">
                    <p className="text-lg font-semibold text-left text-blue-600 mb-4">Mobility</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-left text-blue-700 mb-6">
                      Accessible anytime, from anywhere
                    </h2>
                    <h3 className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Eliminate the need to carry bulky files and case documents all the way, wherever you go. Access your case workspace and details offline on Provakil.
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start transform hover:scale-105 transition-transform duration-200">
                        <img className="w-5 h-5 mr-3" src="/images/landing/correct_icon.svg" alt="Check mark icon" />
                        <p className="text-sm text-gray-600 hover:text-blue-600">
                          Manage your cases on your iOS/Android mobile through the Provakil app.
                        </p>
                      </div>
                      <div className="flex items-start transform hover:scale-105 transition-transform duration-200">
                        <img className="w-5 h-5 mr-3" src="/images/landing/correct_icon.svg" alt="Check mark icon" />
                        <p className="text-sm text-gray-600 hover:text-blue-600">
                          Supported on all operating browsers and device types.
                        </p>
                      </div>
                      <div className="flex items-start transform hover:scale-105 transition-transform duration-200">
                        <img className="w-5 h-5 mr-3" src="/images/landing/correct_icon.svg" alt="Check mark icon" />
                        <p className="text-sm text-gray-600 hover:text-blue-600">
                          You can access the Provakil dashboard on your laptop or tablet, too.
                        </p>
                      </div>
                      <div className="flex items-start transform hover:scale-105 transition-transform duration-200">
                        <img className="w-5 h-5 mr-3" src="/images/landing/correct_icon.svg" alt="Check mark icon" />
                        <p className="text-sm text-gray-600 hover:text-blue-600">
                          Your case workspace is available offline, enabling accessibility even in low internet areas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </CardContent>
      </Card>

      {/* Try It Section */}
      <section className="bg-blue-600 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-auto mb-6 lg:mb-0">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Try It. Trust It. Love It.
              </h3>
            </div>
            <div className="w-full lg:w-auto text-center lg:text-right">
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="hover:bg-blue-50 transform hover:scale-105"
              >
                <Link href="/register">
                  Free Trial
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
