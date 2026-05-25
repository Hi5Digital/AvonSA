const ImageGrid = () => {
  const images = [
    {
      id: 1,
      title: "Woman with Makeup",
      emoji: "👩‍🦰",
    },
    {
      id: 2,
      title: "Makeup Textures",
      emoji: "🎨",
    },
    {
      id: 3,
      title: "Lipgloss Tubes",
      emoji: "💅",
    },
    {
      id: 4,
      title: "Applying Lipgloss",
      emoji: "✨",
    },
    {
      id: 5,
      title: "Makeup Brushes",
      emoji: "🖌️",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-cream-light">
      <div className="container-max">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {images.map((img) => (
            <div
              key={img.id}
              className="aspect-square rounded-sm bg-gradient-to-br from-luxury-plum/5 to-luxury-berry/5 flex items-center justify-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-5xl mb-2">{img.emoji}</div>
                <p className="text-xs text-luxury-taupe font-medium">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
