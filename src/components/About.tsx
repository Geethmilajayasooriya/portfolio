import { GraduationCap, MapPin, Target } from 'lucide-react';
import profileCasual from '@/assets/profile-casual2.jpeg';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary mb-2">01. About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Who I Am
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Profile Image */}
            <div className="md:col-span-1 flex justify-center">
              <div className="relative">
                <div className="w-64 h-80 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-elegant">
                  <img 
                    src={profileCasual
                  } 
                    alt="Geethmila Jayasooriya" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-primary/10 -z-10" />
              </div>
            </div>

            {/* Text Content */}
            <div className="md:col-span-2 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm a third-year Computer Engineering undergraduate at the 
                <span className="text-foreground font-medium"> University of Sri Jayewardenepura</span>, 
                Sri Lanka,(GPA 3.67).I'm passionate about building software that solves real-world problems.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
               I am an IT undergraduate with experience in full-stack web development, cloud-based applications, and intelligent systems. I have worked on projects using React, Node.js, Firebase, Spring Boot, and Python, including chatbots, management systems, and machine learning applications. I am a fast learner who enjoys solving real-world problems and working in collaborative development environments.
              </p>
              
              
            </div>
          </div>

          {/* Info Cards - Full Width Below */}
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <div className="p-6 rounded-xl bg-gradient-card border border-border card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Education</h3>
                  <p className="text-muted-foreground text-sm">BSc. Computer Engineering</p>
                  <p className="text-muted-foreground text-sm">University of Sri Jayewardenepura</p>
                  <p className="text-primary font-mono text-sm mt-1">GPA: 3.7</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-card border border-border card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground text-sm">Sri Lanka</p>
                  <p className="text-muted-foreground text-sm">Available for Remote Work</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-card border border-border card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Goal</h3>
                  <p className="text-muted-foreground text-sm">
                    Seeking an internship in software development to apply my skills 
                    and grow with a professional team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
