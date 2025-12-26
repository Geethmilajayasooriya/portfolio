import { Award, Users, Crown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const experiences = [
  {
  icon: Users,
  title: 'Trainee',
  organization: "People’s Bank,Weligama branch",
  description: 'Banking Trainee (2022 – 2023)',
},
{
  icon: Users,
  title: 'Call Coordinator Assistant',
  organization: 'ESL College',
  description: 'Assisted in coordinating calls and communication activities (2025)',
},

{
  icon: Users,
  title: 'Senior Prefect',
  organization: 'Southlands College, Galle',
  description: 'School leadership role (2019 – 2020)',
},
{
  icon: Users,
  title: 'Junior Prefect',
  organization: 'Southlands College, Galle',
  description: 'School leadership role (2016 – 2017)',
},
{
  icon: Award,
  title: '1st Place – All Island Dancing Competition',
  organization: 'National Level',
  description: 'All Island Dancing Competition (2019)',
},

  {
    icon: Users,
    title: 'Volunteer',
    organization: 'Techno 2023 ',
    description: 'IESL Student Chapter',
  },
  {
  icon: Users,
  title: 'Finance Crew Member',
  organization: 'Nexus Club',
  description: 'Financial planning and budget handling',
},
  {
  icon: Users,
  title: 'School Sports Team Member',
  organization: 'Southlands College, Galle',
  description: 'Member of Cricket, Netball, and Elle teams',
},
{
  icon: Users,
  title: 'Team Member',
  organization: 'School Orchestra & Dancing Team',
  description: 'Active participant in music and dance activities',
},

{
  icon: Users,
  title: 'Team Member',
  organization: 'Flair Club',
  description: 'Active member involved in club activities',
},


];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    obs.observe(el);

    const onHashChange = () => {
      if (window.location.hash === '#experience') {
        setIsVisible(true);
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    window.addEventListener('hashchange', onHashChange);

    // If page loads with the hash already set
    if (window.location.hash === '#experience') {
      setTimeout(() => {
        setIsVisible(true);
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    }

    return () => {
      obs.disconnect();
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-24 relative bg-secondary/30 transition-all duration-700 ${isVisible ? 'animate-slide-in-left' : ''}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary mb-2">04. Beyond Code</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-gradient-card border border-border card-hover"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{exp.title}</h3>
                  <p className="text-primary text-sm mb-1">{exp.organization}</p>
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
