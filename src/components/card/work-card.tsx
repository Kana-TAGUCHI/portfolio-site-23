import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { MdClose } from 'react-icons/md'
import { SiGithub } from 'react-icons/si'
import { FiLink } from 'react-icons/fi'
import { Label } from '@/components/label'
import { WorkType } from '@/data'

type WorkCardProps = {
  work: WorkType
}

export const WorkCard = ({ work }: WorkCardProps) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div
        tabIndex={work.id}
        role="button"
        className="h-60 w-fit relative rounded-lg cursor-pointer group/item"
        onClick={() => setShowModal(true)}
      >
        <Image
          src={`/images/works/${work.images[0]}`}
          alt="K"
          width="360"
          height="240"
          className="object-cover h-full rounded-lg opacity-40 md:opacity-100 group-hover/item:opacity-40"
        ></Image>
        <div className="opacity-100 absolute inset-0 flex flex-col px-8 translate-y-1/4 group-hover/item:opacity-100 group-hover/item:translate-y-1/4 transition-all duration-500 ease-in-out md:opacity-0 md:translate-y-2/4">
          <h3 className="text-2xl font-bold text-gray-100">{work.title}</h3>
          <p className="pt-2 text-sm line-clamp-2 text-gray-100 md:text-md">
            {work.overview}
          </p>
          <div className="flex gap-4 pt-4">
            {work.tech.slice(0, 3).map((item) => (
              <Label
                key={item}
                text={item}
                {...{
                  width: { sp: 'w-fit', md: 'w-fit' },
                  textSize: { sp: 'text-xs', md: 'text-sm' }
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-30">
            <div className="p-4 w-full md:max-w-4xl">
              <div className="relative border-0 rounded-lg shadow-lg flex flex-col w-full bg-black px-3 py-8 max-h-[calc(100vh-40px)] md:p-8">
                <button
                  className="absolute top-2 right-2 text-gray-50 font-bold w-fit ml-auto text-2xl md:text-4xl md:top-3 md:right-3 hover:opacity-70"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  <MdClose />
                </button>

                <div className="overflow-y-auto">
                  <div className="pt-4 md:pt-8">
                    <Swiper
                      slidesPerView={'auto'}
                      navigation={true}
                      pagination={{
                        clickable: true
                      }}
                      autoplay={{
                        delay: 5000
                      }}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="mySwiper"
                    >
                      {work.images.map((image) => (
                        <SwiperSlide key={image}>
                          <div className="bg-gray-200 w-80 mx-auto p-1 h-44 md:w-4/5 md:h-96 md:p-2">
                            <Image
                              src={`/images/works/${image}`}
                              width="660"
                              height="440"
                              alt="work1"
                              className="w-full object-cover h-full"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  <div className="pt-6 md:w-4/5 md:mx-auto">
                    <h3 className="text-xl font-bold md:text-2xl">
                      {work.title}
                    </h3>
                    <div className="flex flex-col gap-8 pt-8 md:px-3">
                      <div>
                        <h4 className="font-bold text-gray-100 mb-3 md:text-xl">
                          OverView
                        </h4>
                        <p className="text-sm text-gray-100 md:text-base">
                          {work.overview}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-100 mb-3 md:text-xl">
                          Technology
                        </h4>
                        <div className="flex gap-4 flex-wrap">
                          {work.tech.map((item) => (
                            <Label
                              key={item}
                              text={item}
                              {...{
                                width: { sp: 'w-fit', md: 'w-fit' },
                                textSize: { sp: 'text-xs', md: 'text-base' }
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      {work.website && (
                        <div>
                          <h4 className="font-bold text-gray-100 flex items-center mb-2 md:text-xl">
                            <span className="pr-2 md:pr-2">
                              <FiLink />
                            </span>
                            Website
                          </h4>
                          <a
                            href={work.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-purple-50 underline md:text-base hover:opacity-70"
                          >
                            {work.website}
                          </a>
                        </div>
                      )}
                      {work.github && (
                        <div>
                          <h4 className="font-bold text-gray-100 flex items-center mb-2 md:text-xl">
                            <span className="pr-1 md:pr-2">
                              <SiGithub />
                            </span>
                            Github
                          </h4>
                          <a
                            href={work.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-purple-50 underline md:text-base hover:opacity-70"
                          >
                            {work.github}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fixed inset-0 z-20 opacity-80 bg-gray-modal"></div>
        </>
      )}
    </>
  )
}