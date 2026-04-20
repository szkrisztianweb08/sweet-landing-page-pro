import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cookie, Phone, MapPin, Clock, Mail, Instagram, Facebook, Heart, Wheat, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-cookies.jpg";
import cookieChoco from "@/assets/cookie-choco.jpg";
import cookieOatmeal from "@/assets/cookie-oatmeal.jpg";
import cookieWhite from "@/assets/cookie-white.jpg";
import cookieDouble from "@/assets/cookie-double.jpg";

const products = [
  { img: cookieChoco, name: "Klasszikus Csokis", desc: "Belga étcsoki darabokkal, ropogós szélekkel.", price: "490 Ft" },
  { img: cookieDouble, name: "Dupla Csoki", desc: "Kakaós tészta, olvadt csokoládé örvény.", price: "550 Ft" },
  { img: cookieOatmeal, name: "Zabos Mazsolás", desc: "Skót zabbal és puha mazsolával.", price: "470 Ft" },
  { img: cookieWhite, name: "Fehér Csoki Macadamia", desc: "Krémes fehér csoki, pörkölt macadamia.", price: "590 Ft" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <nav className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-display text-xl font-bold text-primary">
            <Cookie className="w-6 h-6 text-accent" strokeWidth={2.2} />
            Cookies Shop
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#sutik" className="hover:text-accent transition-smooth">Sütik</a>
            <a href="#tortenet" className="hover:text-accent transition-smooth">Történet</a>
            <a href="#kapcsolat" className="hover:text-accent transition-smooth">Kapcsolat</a>
          </div>
          <Button asChild size="sm" className="bg-primary hover:bg-cocoa text-primary-foreground rounded-full">
            <a href="#kapcsolat">Rendelés</a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative pt-16 min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-warm" />
        <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-7 animate-in fade-in slide-in-from-left-8 duration-700">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur text-sm font-medium text-primary shadow-card">
              <Sparkles className="w-4 h-4 text-accent" /> Minden nap frissen sütve
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-black leading-[0.95] text-primary">
              Az a süti, amire <em className="text-accent not-italic">emlékezni</em> fogsz.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Kézzel formált, hagyományos receptek alapján sütött kekszek — vajjal, valódi belga csokival, türelemmel.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="bg-primary hover:bg-cocoa text-primary-foreground rounded-full px-8 shadow-warm">
                <a href="#sutik">Nézd meg a kínálatot</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-primary/30 hover:bg-secondary">
                <a href="#kapcsolat">Találj meg minket</a>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Heart className="w-4 h-4 text-accent" /> 100% kézműves</div>
              <div className="flex items-center gap-2"><Wheat className="w-4 h-4 text-accent" /> Tartósítószer-mentes</div>
            </div>
          </div>
          <div className="relative animate-in fade-in zoom-in-95 duration-1000">
            <div className="absolute -inset-6 bg-accent/20 rounded-[2.5rem] blur-3xl" />
            <img
              src={heroImg}
              alt="Frissen sütött csokis kekszek halma egy fa vágódeszkán"
              width={1600}
              height={1024}
              className="relative rounded-[2rem] shadow-warm w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="sutik" className="py-24 bg-background">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Kínálat</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-3">
              A pultban ma találhatsz…
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Négy klasszikus, amiért minden reggel 5-kor begyújtjuk a sütőt.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <Card
                key={p.name}
                className="group overflow-hidden border-border/60 bg-card rounded-3xl shadow-card hover:shadow-warm transition-smooth hover:-translate-y-2"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-display text-xl font-bold text-primary">{p.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed min-h-[2.5rem]">{p.desc}</p>
                  <div className="flex items-center justify-between pt-3">
                    <span className="font-display text-2xl font-bold text-accent">{p.price}</span>
                    <span className="text-xs text-muted-foreground">/ db</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="tortenet" className="py-24 bg-gradient-cocoa text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="container relative grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">A történetünk</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 leading-tight">
              Egy kis bolt. <br />Egy nagy szenvedély.
            </h2>
          </div>
          <div className="space-y-5 text-primary-foreground/90 text-lg leading-relaxed">
            <p>
              2018-ban nyitottuk meg a Cookies Shopot egy budapesti mellékutcában — egyetlen sütővel és nagyanyám receptfüzetével.
            </p>
            <p>
              Ma is ugyanaz a hitvallásunk: <span className="text-accent font-semibold">igazi alapanyagok, igazi idő, igazi íz</span>. Semmi sietség, semmi por, semmi műcsoki.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-primary-foreground/20">
              <div><div className="font-display text-3xl font-bold text-accent">7</div><div className="text-sm opacity-80">év a pultnál</div></div>
              <div><div className="font-display text-3xl font-bold text-accent">12</div><div className="text-sm opacity-80">recept</div></div>
              <div><div className="font-display text-3xl font-bold text-accent">∞</div><div className="text-sm opacity-80">vajdarab</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kapcsolat" className="py-24 bg-background">
        <div className="container max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Látogass el</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-3">
              Gyere be egy meleg sütiért.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: MapPin, title: "Cím", lines: ["1075 Budapest,", "Vajas utca 12."] },
              { icon: Clock, title: "Nyitvatartás", lines: ["H–P: 8:00 – 19:00", "Szo–V: 9:00 – 17:00"] },
              { icon: Phone, title: "Telefon", lines: ["+36 1 555 0142", "info@cookiesshop.hu"] },
            ].map(({ icon: Icon, title, lines }) => (
              <Card key={title} className="p-7 rounded-3xl border-border/60 bg-card shadow-card hover:shadow-warm transition-smooth text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-accent/15 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2">{title}</h3>
                {lines.map((l) => (
                  <p key={l} className="text-muted-foreground">{l}</p>
                ))}
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-accent hover:bg-caramel text-accent-foreground rounded-full px-10 shadow-warm">
              <a href="tel:+3615550142"><Phone className="w-4 h-4 mr-2" /> Hívj most: +36 1 555 0142</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <Cookie className="w-5 h-5 text-accent" /> Cookies Shop
          </div>
          <p className="text-sm text-primary-foreground/70">© {new Date().getFullYear()} Cookies Shop. Minden morzsa fenntartva.</p>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-smooth"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-smooth"><Facebook className="w-4 h-4" /></a>
            <a href="mailto:info@cookiesshop.hu" aria-label="Email" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-smooth"><Mail className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
