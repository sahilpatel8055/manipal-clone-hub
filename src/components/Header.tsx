import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, Search, MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';
import logo from '@/assets/muj_logo-removebg-preview.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      title: 'Courses',
      hasDropdown: true,
      items: [
        { name: 'Online MBA', href: '/mba' },
        { name: 'Online MCA', href: '/mca' },
        { name: 'Online BBA', href: '/bba' },
        { name: 'Online BCA', href: '/bca' },
        { name: 'Online BCom', href: '/bcom' },
        { name: 'Online MCom', href: '/mcom' },
      ],
    },
    {
      title: 'Institutions',
      hasDropdown: true,
      items: [
        { name: 'Manipal University Jaipur', href: '/muj' },
        { name: 'Manipal Academy of Higher Education', href: '/mahe' },
        { name: 'Sikkim Manipal University', href: '/smu' },
      ],
    },
    {
      title: 'The Manipal Advantage',
      hasDropdown: false,
      href: '/advantage',
    },
  ];

  const handleMobileDropdownToggle = (title: string) =>
    setOpenDropdown(openDropdown === title ? null : title);

  return (
    <>
      <header className="fixed top-3 left-1/2 -translate-x-1/2 w-[95%] lg:w-[85%] z-50 bg-background/95 backdrop-blur-lg border border-border rounded-2xl shadow-lg">
        <div className="px-4 md:px-6">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0" aria-label="Home">
              <img
                src={logo}
                alt="Manipal University Jaipur"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop & Tablet Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.hasDropdown ? (
                    <>
                      <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-smooth font-medium">
                        <span>{item.title}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {openDropdown === item.title && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg p-2">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-3 text-card-foreground hover:bg-accent rounded-md transition-smooth"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href!}
                      className="text-foreground hover:text-primary transition-smooth font-medium"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}

              <Button size="sm" className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-primary">
                Apply Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-foreground hover:text-primary transition-smooth"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu content */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border max-h-[70vh] overflow-y-auto">
              <nav className="space-y-2">
                {navigationItems.map((item) =>
                  item.hasDropdown ? (
                    <div key={item.title}>
                      <button
                        onClick={() => handleMobileDropdownToggle(item.title)}
                        className="w-full flex items-center justify-between py-2 text-foreground font-medium"
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={cn('w-4 h-4 transition-transform', openDropdown === item.title && 'rotate-180')}
                        />
                      </button>
                      {openDropdown === item.title && (
                        <div className="pl-4 space-y-1">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block py-2 text-sm text-card-foreground hover:text-primary"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.title}
                      to={item.href!}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 text-foreground font-medium"
                    >
                      {item.title}
                    </Link>
                  )
                )}
                <Button className="w-full bg-gradient-primary mt-2">Apply Now</Button>
              </nav>
            </div>
          )}
        </div>
      </header>
      {/* Spacer so page content doesn't hide under the fixed header */}
      <div aria-hidden className="h-24 md:h-28" />
    </>
  );
};

export default Header;
