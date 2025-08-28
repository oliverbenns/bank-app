import {
  Banknote,
  Bed,
  Beer,
  BookOpen,
  Briefcase,
  Building,
  Building2,
  Bus,
  Calculator,
  Car,
  Circle,
  CircleDot,
  DollarSign,
  Download,
  Dumbbell,
  FerrisWheel,
  Film,
  Fuel,
  Gavel,
  Gem,
  Globe,
  GraduationCap,
  Hamburger,
  Hammer,
  Heart,
  Home,
  Hotel,
  Key,
  Landmark,
  Laptop,
  Library,
  Luggage,
  Mail,
  Megaphone,
  Monitor,
  Navigation,
  ParkingCircle,
  PawPrint,
  Phone,
  Pill,
  Plane,
  Plug,
  School,
  Shapes,
  Shield,
  ShieldCheck,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sofa,
  Sprout,
  Stethoscope,
  Store,
  Trash2,
  TrendingUp,
  User,
  Users,
  Utensils,
  WashingMachine,
  Wheat,
  Wrench,
  Zap,
} from "lucide-react-native";

type LucideIcon = React.ComponentType<{ size?: number; color?: string }>;

type MccCategory = {
  icon: LucideIcon;
  color: string;
  backgroundColor: string;
};

export const mccCategories: Record<string, MccCategory> = {
  "0001-1499": {
    icon: Wheat,
    color: "#2D5016",
    backgroundColor: "#E8F5E8",
  },
  "1500-2999": {
    icon: Wrench,
    color: "#7C3AED",
    backgroundColor: "#F3E8FF",
  },
  "4000-4799": {
    icon: Car,
    color: "#1E40AF",
    backgroundColor: "#DBEAFE",
  },
  "4800-4999": {
    icon: Zap,
    color: "#F59E0B",
    backgroundColor: "#FEF3C7",
  },
  "5000-5599": {
    icon: ShoppingBag,
    color: "#059669",
    backgroundColor: "#D1FAE5",
  },
  "5600-5699": {
    icon: Shirt,
    color: "#DC2626",
    backgroundColor: "#FEE2E2",
  },
  "5700-7299": {
    icon: Store,
    color: "#7C2D12",
    backgroundColor: "#FED7AA",
  },
  "7300-7999": {
    icon: Building2,
    color: "#1F2937",
    backgroundColor: "#E5E7EB",
  },
  "8000-8999": {
    icon: Users,
    color: "#0369A1",
    backgroundColor: "#E0F2FE",
  },
  "9000-9999": {
    icon: Landmark,
    color: "#6B21A8",
    backgroundColor: "#F3E8FF",
  },
};

// Specific merchant brands for common MCCs
export const codeIcons: Record<string, LucideIcon> = {
  // Automotive & Transportation
  "5541": Fuel, // Gas Stations
  "5542": Fuel, // Gas Stations
  "5531": Wrench, // Auto Parts
  "5533": Wrench, // Auto Parts
  "7512": Key, // Car Rental
  "7523": ParkingCircle, // Parking
  "4121": Navigation, // Taxi/Rideshare
  "4111": Bus, // Public Transportation
  "4511": Plane, // Airlines

  // Food & Dining
  "5812": Utensils, // Restaurants
  "5814": Hamburger, // Fast Food
  "5411": ShoppingCart, // Grocery Stores
  "5813": Beer, // Bars/Taverns
  "5462": Bed, // Bakeries

  // Retail & Shopping
  "5311": Store, // Department Stores
  "5651": Shirt, // Clothing Stores
  "5732": Smartphone, // Electronics
  "5734": Laptop, // Electronics
  "5942": BookOpen, // Bookstores
  "5944": Gem, // Jewelry
  "5941": Circle, // Sporting Goods
  "5912": Pill, // Pharmacies
  "5251": Hammer, // Hardware Stores

  // Health & Wellness
  "8062": Building, // Hospitals
  "8011": Stethoscope, // Medical Services
  "8021": User, // Medical Services
  "0742": PawPrint, // Veterinary
  "7997": Dumbbell, // Fitness/Gyms
  "7230": Heart, // Spas/Beauty

  // Entertainment & Leisure
  "7832": Film, // Movie Theaters
  "7011": Hotel, // Hotels/Lodging
  "4722": Luggage, // Travel Agencies
  "7996": FerrisWheel, // Amusement Parks
  "7941": CircleDot, // Sports Events
  "8412": Building2, // Museums
  "7998": PawPrint, // Zoos/Aquariums

  // Professional Services
  "8111": Gavel, // Legal Services
  "8931": Calculator, // Accounting
  "6300": Shield, // Insurance
  "6513": Home, // Real Estate
  "7392": Briefcase, // Consulting
  "7311": Megaphone, // Advertising

  // Utilities & Services
  "4900": Zap, // Electric/Gas Utilities
  "4814": Phone, // Telecommunications
  "7372": Globe, // Internet Services
  "4953": Trash2, // Waste Management
  "9402": Mail, // Postal Services
  "9399": Building2, // Government Services

  // Financial Services
  "6011": Banknote, // Banks
  "6012": DollarSign, // Banks
  "6211": TrendingUp, // Investment Services
  "5960": ShieldCheck, // Insurance Payments

  // Education
  "8220": GraduationCap, // Schools/Universities
  "8299": School, // Schools/Universities
  "8231": Library, // Libraries

  // Home & Garden
  "5200": Home, // Home Improvement
  "5211": Hammer, // Home Improvement
  "5261": Sprout, // Garden Centers
  "5712": Sofa, // Furniture
  "5722": Plug, // Appliances

  // Personal Care
  "7210": WashingMachine, // Laundry/Dry Cleaning

  // Digital & Online
  "5964": Monitor, // E-commerce
  "5815": Download, // Digital Downloads
};

export const getMccCategory = (mcc: string): MccCategory => {
  const mccNumber = parseInt(mcc);
  const codeIcon = codeIcons[mcc];

  // Categorize by MCC range
  let category: MccCategory;
  if (mccNumber >= 1 && mccNumber <= 1499) {
    category = mccCategories["0001-1499"];
  } else if (mccNumber >= 1500 && mccNumber <= 2999) {
    category = mccCategories["1500-2999"];
  } else if (mccNumber >= 4000 && mccNumber <= 4799) {
    category = mccCategories["4000-4799"];
  } else if (mccNumber >= 4800 && mccNumber <= 4999) {
    category = mccCategories["4800-4999"];
  } else if (mccNumber >= 5000 && mccNumber <= 5599) {
    category = mccCategories["5000-5599"];
  } else if (mccNumber >= 5600 && mccNumber <= 5699) {
    category = mccCategories["5600-5699"];
  } else if (mccNumber >= 5700 && mccNumber <= 7299) {
    category = mccCategories["5700-7299"];
  } else if (mccNumber >= 7300 && mccNumber <= 7999) {
    category = mccCategories["7300-7999"];
  } else if (mccNumber >= 8000 && mccNumber <= 8999) {
    category = mccCategories["8000-8999"];
  } else if (mccNumber >= 9000 && mccNumber <= 9999) {
    category = mccCategories["9000-9999"];
  } else {
    category = {
      icon: Shapes,
      color: "#6B7280",
      backgroundColor: "#F3F4F6",
    };
  }

  return {
    ...category,
    icon: codeIcon || category.icon,
  };
};
