

export function HomePost({
}) {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28 items-center">
        <div className="mb-8 md:mb-0">
          <img 
            src="/assets/blog/cover-photos/phish-and-chips-minimal.png" 
            alt="phish and chips"
            className="w-4/5 h-auto"
          />
        </div>
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            Here you will find information, stories, and guidance on how to protect yourself in the digital world.
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Whether you're a beginner looking to understand the basics or an experienced user seeking advanced tips, our content is designed to empower you with knowledge about cybersecurity threats, best practices, and the latest trends in online safety.
          </p>
        </div>
      </div>
    </section>
  );
}
