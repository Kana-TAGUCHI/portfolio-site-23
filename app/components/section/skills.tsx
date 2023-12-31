import { SectionTitle } from '@/components/title'
import { DevIcons } from '@/components/icon'
import { RevealAnimation } from '@/components/animation'

export const Skills = () => {
  return (
    <section className="mt-32 md:mt-60" id="skills">
      <SectionTitle title="MY SKILLS" />
      <div className="flex flex-col gap-11 items-center mt-11 text-center md:items-start md:text-left md:gap-16 md:mt-14">
        <div>
          <RevealAnimation>
            <h3 className="font-bold text-xl text-purple-400 dark:text-purple-50">
              Front End
            </h3>
            <DevIcons type="frontEnd" />
          </RevealAnimation>
        </div>
        <div>
          <RevealAnimation>
            <h3 className="font-bold text-xl text-purple-400 dark:text-purple-50">
              Back End
            </h3>
            <DevIcons type="backEnd" />
          </RevealAnimation>
        </div>
        <div>
          <RevealAnimation>
            <h3 className="font-bold text-xl text-purple-400 dark:text-purple-50">
              Tools
            </h3>
            <DevIcons type="tool" />
          </RevealAnimation>
        </div>
      </div>
    </section>
  )
}
