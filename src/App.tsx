import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Leaf,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Check,
  Users,
  Award,
  Zap,
  Shirt,
  Wind,
  BedDouble,
  CalendarCheck,
  Truck,
  WashingMachine,
  Package,
} from "lucide-react";
import logo from "./assets/logo.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo e-Manasa" className="h-14 w-14" />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent">
                e-manasa
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("workflow")}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Comment ça marche
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg">
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-700 hover:text-emerald-600 transition-colors text-left"
                >
                  Accueil
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 hover:text-emerald-600 transition-colors text-left"
                >
                  À propos
                </button>
                <button
                  onClick={() => scrollToSection("workflow")}
                  className="text-gray-700 hover:text-emerald-600 transition-colors text-left"
                >
                  Comment ça marche
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 hover:text-emerald-600 transition-colors text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 hover:text-emerald-600 transition-colors text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-lime-50 to-green-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-200/20 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <img
              src={logo}
              alt="Logo e-Manasa"
              className="h-48 w-48 mx-auto mb-4 animate-pulse"
              style={{ transform: "rotate(33deg)" }}
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-lime-600 to-green-600 bg-clip-text text-transparent">
              Blanchisserie
            </span>
            <br />
            <span className="bg-gradient-to-r from-lime-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
              Écologique
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Prenez soin de vos vêtements et de la planète avec notre service de
            blanchisserie respectueux de l'environnement
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("workflow")}
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-lime-600 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center group"
            >
              Découvrir
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 rounded-full font-semibold text-lg hover:bg-emerald-600 hover:text-white transition-all duration-300"
            >
              Réserver maintenant
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-emerald-600" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent">
              À propos de nous
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous sommes passionnés par l'entretien écologique de vos textiles,
              alliant efficacité et respect de l'environnement pour un service
              de qualité supérieure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Service Personnalisé
              </h3>
              <p className="text-gray-600">
                Nous adaptons nos services à vos besoins spécifiques et à vos
                textiles.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-lime-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Qualité Premium</h3>
              <p className="text-gray-600">
                Nous garantissons un résultat impeccable avec des techniques de
                pointe respectueuses.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Écologique</h3>
              <p className="text-gray-600">
                Nous utilisons des produits biodégradables et des méthodes
                éco-responsables.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-lime-50 rounded-3xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Notre engagement écologique
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Chez Benevolent Sherbet, nous croyons qu'il est possible de
                prendre soin de vos vêtements tout en préservant notre planète.
                Notre mission est d'offrir un service de blanchisserie de
                qualité supérieure en utilisant exclusivement des produits
                biodégradables, des techniques économes en eau et en énergie,
                pour un avenir plus vert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus simple et efficace en 4 étapes pour prendre soin de
              votre linge en toute sérénité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CalendarCheck className="h-10 w-10 text-white" />
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-emerald-600">
                  1. Réservation Facile
                </h3>
                <p className="text-gray-600">
                  Réservez votre service en ligne en quelques clics, choisissez
                  vos options et planifiez la collecte.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-lime-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-10 w-10 text-white" />
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-lime-600">
                  2. Collecte à Domicile
                </h3>
                <p className="text-gray-600">
                  Notre équipe vient chercher votre linge directement chez vous,
                  à la date et l'heure convenues.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <WashingMachine className="h-10 w-10 text-white" />
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-green-600">
                  3. Lavage Écologique
                </h3>
                <p className="text-gray-600">
                  Votre linge est lavé avec soin, en utilisant des méthodes et
                  des produits respectueux de l'environnement.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Package className="h-10 w-10 text-white" />
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-emerald-600">
                  4. Livraison Rapide
                </h3>
                <p className="text-gray-600">
                  Nous vous livrons votre linge propre et frais, directement à
                  votre porte, prêt à être utilisé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent">
              Nos Services de Blanchisserie Écologique
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos services de blanchisserie respectueux de
              l'environnement, conçus pour prendre soin de vos vêtements et de
              la planète.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shirt className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Vêtements Courants
              </h3>
              <p className="text-gray-600 mb-4">
                Lavage et séchage doux pour vos articles du quotidien.
              </p>
              <p className="text-2xl font-bold text-emerald-600 mb-6">
                2 500 Ar / kg
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Lavage écologique
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Séchage à basse température
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Repassage optionnel
                </li>
              </ul>

              <button className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-lime-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                Choisir ce service
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-lime-500 to-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wind className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Vestes et Manteaux
              </h3>
              <p className="text-gray-600 mb-4">
                Nettoyage spécialisé pour vos vestes, manteaux et doudounes.
              </p>
              <p className="text-2xl font-bold text-lime-600 mb-6">
                15 000 Ar / pièce
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Nettoyage à sec écologique
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Traitement des taches
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Imperméabilisation optionnelle
                </li>
              </ul>

              <button className="w-full px-6 py-3 bg-gradient-to-r from-lime-600 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                Choisir ce service
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BedDouble className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Textiles de Maison
              </h3>
              <p className="text-gray-600 mb-4">
                Entretien professionnel de vos draps, serviettes et rideaux.
              </p>
              <p className="text-2xl font-bold text-green-600 mb-6">
                5 000 Ar / pièce
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Lavage grande capacité
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Désinfection naturelle
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Finition impeccable
                </li>
              </ul>

              <button className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                Choisir ce service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent">
              Réservez votre collecte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Planifiez facilement la collecte de votre linge en remplissant le
              formulaire ci-dessous. Nous nous occupons du reste !
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-emerald-50 to-lime-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Formulaire de réservation
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="+261 XX XX XXX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service souhaité
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300">
                    <option value="">Choisissez un service</option>
                    <option value="vetements-courants">
                      Vêtements Courants (2 500 Ar/kg)
                    </option>
                    <option value="vestes-manteaux">
                      Vestes et Manteaux (15 000 Ar/pièce)
                    </option>
                    <option value="textiles-maison">
                      Textiles de Maison (5 000 Ar/pièce)
                    </option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date de collecte
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Heure de collecte
                    </label>
                    <input
                      type="time"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse de collecte
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Votre adresse complète..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Instructions spéciales (optionnel)
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Taches particulières, instructions de lavage spéciales..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-lime-600 text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Réserver la collecte
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Informations de contact
                </h3>
                <p className="text-gray-600 mb-8">
                  Nous sommes là pour vous aider. N'hésitez pas à nous contacter
                  pour toute question ou demande spéciale.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl hover:bg-gray-50 transition-colors duration-300 shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">
                      contact@benevolent-sherbet.mg
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl hover:bg-gray-50 transition-colors duration-300 shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-lime-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Téléphone
                    </h4>
                    <p className="text-gray-600">+261 20 22 123 45</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl hover:bg-gray-50 transition-colors duration-300 shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Adresse
                    </h4>
                    <p className="text-gray-600">
                      Lot XXX Toliara
                      <br />
                      Toliara, Madagascar
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Horaires d'ouverture
                </h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>7h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span>8h00 - 16h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img src={logo} alt="Logo e-Manasa" className="h-16 w-16" />
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent">
                e-manasa
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Blanchisserie écologique - Prenez soin de vos vêtements et de la
              planète
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("workflow")}
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Comment ça marche
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Contact
              </button>
            </div>
            <div className="pt-6 border-t border-gray-800">
              <p className="text-gray-500">
                © 2025 e-manasa. Tous droits réservés. | Service de
                blanchisserie écologique à Madagascar
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
