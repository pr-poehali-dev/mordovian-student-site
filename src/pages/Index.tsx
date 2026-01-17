import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const articles = [
    {
      title: 'Методы преподавания истории в современной школе',
      date: '15 декабря 2024',
      category: 'Методика',
      excerpt: 'Анализ современных подходов к преподаванию истории и их эффективность в образовательном процессе.'
    },
    {
      title: 'Роль исторического наследия в формировании личности',
      date: '3 ноября 2024',
      category: 'Педагогика',
      excerpt: 'Исследование влияния исторического образования на развитие критического мышления учащихся.'
    },
    {
      title: 'Цифровые технологии на уроках истории',
      date: '20 октября 2024',
      category: 'Инновации',
      excerpt: 'Практическое применение мультимедийных технологий для повышения вовлеченности студентов.'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              Портфолио Педагога
            </div>
            <div className="flex gap-8">
              {['home', 'about', 'education', 'articles'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'Обо мне'}
                  {section === 'education' && 'Образование'}
                  {section === 'articles' && 'Публикации'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block mb-4">
                <Badge className="text-sm px-4 py-1 bg-secondary text-secondary-foreground">
                  Будущий учитель истории
                </Badge>
              </div>
              <h1 className="text-6xl font-bold text-primary mb-6 leading-tight">
                Изучая прошлое,<br />создаю будущее
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Студент Мордовского государственного педагогического университета имени М. Е. Евсевьева.
                Исследую методики преподавания истории и развиваю инновационные подходы в образовании.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('articles')}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Icon name="BookOpen" className="mr-2" size={20} />
                  Читать публикации
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('about')}
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-slide-up relative">
              <div className="relative aspect-square rounded-lg overflow-hidden border-4 border-secondary/30 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="GraduationCap" size={200} className="text-primary/20" />
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">Обо мне</h2>
            <div className="w-24 h-1 bg-secondary mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-2 hover:border-secondary transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <Icon name="Heart" size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Миссия</h3>
              <p className="text-muted-foreground leading-relaxed">
                Сделать историю живой и увлекательной для каждого ученика, развивая критическое мышление и любовь к познанию.
              </p>
            </Card>

            <Card className="p-8 border-2 hover:border-secondary transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Icon name="Target" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Цели</h3>
              <p className="text-muted-foreground leading-relaxed">
                Внедрение инновационных методик преподавания, создание интерактивных образовательных материалов.
              </p>
            </Card>

            <Card className="p-8 border-2 hover:border-secondary transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <Icon name="Lightbulb" size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Подход</h3>
              <p className="text-muted-foreground leading-relaxed">
                Сочетание традиционных методов с современными технологиями для максимальной эффективности обучения.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">Образование</h2>
            <div className="w-24 h-1 bg-secondary mx-auto" />
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-secondary/30" />
            
            <div className="space-y-12">
              <div className="relative animate-fade-in">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-4 md:mb-0">
                    <Card className="inline-block p-6 border-2 border-secondary/50">
                      <Badge className="mb-3 bg-primary text-primary-foreground">2022 - 2026</Badge>
                      <h3 className="text-2xl font-bold text-primary mb-2">Бакалавриат</h3>
                      <p className="text-lg text-muted-foreground">Педагогическое образование</p>
                    </Card>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-secondary rounded-full border-4 border-background absolute left-1/2 transform -translate-x-1/2" />
                    <div className="md:ml-8">
                      <h4 className="text-xl font-bold text-primary mb-2">
                        МГПУ им. М. Е. Евсевьева
                      </h4>
                      <p className="text-muted-foreground">
                        Факультет истории и права
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-4 md:mb-0 md:order-2">
                    <Card className="inline-block p-6 border-2 border-primary/50">
                      <Badge className="mb-3 bg-secondary text-secondary-foreground">2024</Badge>
                      <h3 className="text-2xl font-bold text-primary mb-2">Повышение квалификации</h3>
                      <p className="text-lg text-muted-foreground">Цифровые технологии в образовании</p>
                    </Card>
                  </div>
                  <div className="flex items-center md:order-1">
                    <div className="w-8 h-8 bg-primary rounded-full border-4 border-background absolute left-1/2 transform -translate-x-1/2" />
                    <div className="md:ml-8">
                      <h4 className="text-xl font-bold text-primary mb-2">
                        Сертификационный курс
                      </h4>
                      <p className="text-muted-foreground">
                        72 академических часа
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-4 md:mb-0">
                    <Card className="inline-block p-6 border-2 border-accent/50">
                      <Badge className="mb-3 bg-accent text-accent-foreground">2023</Badge>
                      <h3 className="text-2xl font-bold text-primary mb-2">Педагогическая практика</h3>
                      <p className="text-lg text-muted-foreground">Школа № 4, г. Рузаевка</p>
                    </Card>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-accent rounded-full border-4 border-background absolute left-1/2 transform -translate-x-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">Статьи и публикации</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Исследования и размышления о методиках преподавания истории и современном образовании
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card 
                key={index}
                className="p-6 border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Badge className="mb-4 bg-primary/10 text-primary border border-primary/20">
                  {article.category}
                </Badge>
                <h3 className="text-xl font-bold text-primary mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                  <Icon name="Calendar" size={16} />
                  {article.date}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <Button variant="outline" className="w-full group">
                  Читать полностью
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-primary mb-2">Портфолио Педагога</h3>
              <p className="text-muted-foreground">
                МГПУ им. М. Е. Евсевьева | Будущий учитель истории
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="Github" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="Linkedin" size={20} />
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
}