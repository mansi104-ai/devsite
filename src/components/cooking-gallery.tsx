"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Clock, Users, ChefHat, Utensils, Coffee, Cookie, Soup } from "lucide-react"

const cookingItems = [
  {
    id: 1,
    title: "Vermicilli",
    category: "baking",
    tags: ["Artisan", "Fermented", "Weekend Project"],
    image: "/images/cooking/vermicilli.jpg",
    description: "A perfectly crusty sourdough with a tender, airy crumb. 3-day fermentation process.",
    cookTime: "6 hours",
    difficulty: "Advanced",
    servings: "8-10",
  },
  {
    id: 2,
    title: "Thai Green Curry",
    category: "mains",
    tags: ["Spicy", "Thai", "Coconut"],
    image: "/images/cooking/vermicilli.jpg",
    description: "Aromatic green curry with fresh herbs, coconut milk, and seasonal vegetables.",
    cookTime: "45 min",
    difficulty: "Medium",
    servings: "4",
  },
  {
    id: 3,
    title: "Chocolate Lava Cake",
    category: "desserts",
    tags: ["Chocolate", "Molten", "Date Night"],
    image: "/images/cooking/vermicilli.jpg",
    description: "Decadent individual chocolate cakes with a molten center, served with vanilla ice cream.",
    cookTime: "25 min",
    difficulty: "Medium",
    servings: "2",
  },
  {
    id: 4,
    title: "Farm Fresh Salad",
    category: "salads",
    tags: ["Fresh", "Seasonal", "Healthy"],
    image: "/images/cooking/vermicilli.jpg",
    description: "Seasonal mixed greens with roasted vegetables and homemade vinaigrette.",
    cookTime: "15 min",
    difficulty: "Easy",
    servings: "4",
  },
  {
    id: 5,
    title: "Espresso Tiramisu",
    category: "desserts",
    tags: ["Italian", "Coffee", "No-Bake"],
    image: "/images/cooking/vermicilli.jpg",
    description: "Classic Italian tiramisu with strong espresso and mascarpone layers.",
    cookTime: "30 min",
    difficulty: "Medium",
    servings: "8",
  },
  {
    id: 6,
    title: "Ramen Bowl",
    category: "mains",
    tags: ["Japanese", "Comfort", "Homemade"],
    image: "/images/cooking/vermicilli.jpg",
    description: "Rich tonkotsu-style ramen with soft-boiled eggs, chashu pork, and fresh scallions.",
    cookTime: "2 hours",
    difficulty: "Advanced",
    servings: "2",
  },
  {
    id: 7,
    title: "Croissants",
    category: "baking",
    tags: ["French", "Laminated", "Buttery"],
    image: "/images/cooking/vermicilli.jpg",
    description: "Flaky, buttery French croissants made with traditional lamination technique.",
    cookTime: "8 hours",
    difficulty: "Advanced",
    servings: "12",
  },
  {
    id: 8,
    title: "Caprese Skewers",
    category: "appetizers",
    tags: ["Italian", "Fresh", "Quick"],
    image: "/images/cooking/vermicilli.jpg",
    description: "Fresh mozzarella, cherry tomatoes, and basil drizzled with balsamic glaze.",
    cookTime: "10 min",
    difficulty: "Easy",
    servings: "6",
  },
]

const categoryIcons = {
  baking: Cookie,
  mains: Utensils,
  desserts: Coffee,
  salads: Soup,
  appetizers: ChefHat,
}

export default function CookingGallery() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Leaves */}
        <div className="absolute top-20 left-10 w-8 h-8 text-green-500/20 rotate-12">🍃</div>
        <div className="absolute top-40 right-20 w-6 h-6 text-green-400/30 -rotate-45">🍃</div>
        <div className="absolute bottom-32 left-16 w-10 h-10 text-green-600/25 rotate-45">🍃</div>
        <div className="absolute top-60 left-1/3 w-7 h-7 text-green-500/20 -rotate-12">🍃</div>

        {/* Cherries */}
        <div className="absolute top-32 right-10 w-6 h-6 text-red-500/30">🍒</div>
        <div className="absolute bottom-40 right-1/4 w-8 h-8 text-red-400/25">🍒</div>
        <div className="absolute top-80 left-20 w-5 h-5 text-red-600/20">🍒</div>
        <div className="absolute bottom-60 right-12 w-7 h-7 text-red-500/30">🍒</div>
      </div>

      {/* Header */}
      <header className="border-b bg-card/90 backdrop-blur-sm sticky top-0 z-40 shadow-sm border-border">
        <div className="container mx-auto px-6 py-12 sm:py-24 max-w-2xl">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-lg">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Kitchen Chronicles</h1>
                <p className="text-muted-foreground max-w-2xl">
                  Welcome to my culinary journey! From weekend baking experiments to weeknight dinner solutions, explore
                  the dishes that bring joy to my kitchen.
                </p>
              </div>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search recipes..."
                className="pl-10 w-full bg-background/90 border-border focus:border-ring"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-2xl relative z-10">
        {/* Filter Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-6 bg-card/90 backdrop-blur-sm border border-border">
            <TabsTrigger value="all" className="text-sm">
              All Dishes
            </TabsTrigger>
            <TabsTrigger value="baking" className="text-sm">
              Baking
            </TabsTrigger>
            <TabsTrigger value="mains" className="text-sm">
              Mains
            </TabsTrigger>
            <TabsTrigger value="desserts" className="text-sm">
              Desserts
            </TabsTrigger>
            <TabsTrigger value="salads" className="text-sm">
              Salads
            </TabsTrigger>
            <TabsTrigger value="appetizers" className="text-sm">
              Apps
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <MasonryGrid items={cookingItems} />
          </TabsContent>

          <TabsContent value="baking" className="mt-8">
            <MasonryGrid items={cookingItems.filter((item) => item.category === "baking")} />
          </TabsContent>

          <TabsContent value="mains" className="mt-8">
            <MasonryGrid items={cookingItems.filter((item) => item.category === "mains")} />
          </TabsContent>

          <TabsContent value="desserts" className="mt-8">
            <MasonryGrid items={cookingItems.filter((item) => item.category === "desserts")} />
          </TabsContent>

          <TabsContent value="salads" className="mt-8">
            <MasonryGrid items={cookingItems.filter((item) => item.category === "salads")} />
          </TabsContent>

          <TabsContent value="appetizers" className="mt-8">
            <MasonryGrid items={cookingItems.filter((item) => item.category === "appetizers")} />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card/90 backdrop-blur-sm mt-16 border-border relative z-10">
        <div className="container mx-auto px-6 py-8 text-center max-w-2xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Utensils className="w-5 h-5 text-orange-600" />
            <p className="text-muted-foreground">Cooking with passion, sharing with love</p>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            "The secret ingredient is always love... and maybe a little extra butter."
          </p>
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg">
            Share Your Recipe
          </Button>
        </div>
      </footer>
    </div>
  )
}

function MasonryGrid({ items }: { items: typeof cookingItems }) {
  return (
    <div className="columns-1 md:columns-2 gap-6 space-y-6">
      {items.map((item) => {
        const IconComponent = categoryIcons[item.category as keyof typeof categoryIcons] || ChefHat

        return (
          <Card key={item.id} className="break-inside-avoid mb-6 group kitchen-card overflow-hidden">
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="kitchen-badge shadow-md">
                    <IconComponent className="w-3 h-3 mr-1" />
                    {item.category}
                  </Badge>
                </div>

                {/* Quick Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex gap-2 mb-3">
                    <Badge variant="secondary" className="bg-background/90 text-foreground text-xs shadow-md">
                      <Clock className="w-3 h-3 mr-1" />
                      {item.cookTime}
                    </Badge>
                    <Badge variant="secondary" className="bg-background/90 text-foreground text-xs shadow-md">
                      <Users className="w-3 h-3 mr-1" />
                      {item.servings}
                    </Badge>
                  </div>
                  <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white shadow-lg">
                    View Recipe
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      item.difficulty === "Easy"
                        ? "border-green-500/50 text-green-600"
                        : item.difficulty === "Medium"
                          ? "border-yellow-500/50 text-yellow-600"
                          : "border-red-500/50 text-red-600"
                    }`}
                  >
                    {item.difficulty}
                  </Badge>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{item.description}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.cookTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>Serves {item.servings}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="kitchen-badge text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
