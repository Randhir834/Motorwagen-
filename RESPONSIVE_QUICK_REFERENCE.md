# 📱 Responsive Design Quick Reference

## Common Responsive Patterns

### 🎯 Typography
```jsx
// Fluid heading
<h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>Title</h1>

// Fluid paragraph
<p style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)' }}>Text</p>

// Using responsive classes
<p className="text-responsive-base">Text</p>
<h2 className="text-responsive-2xl">Heading</h2>
```

### 📐 Layout Grids
```jsx
// Basic responsive grid (1 → 2 → 3 columns)
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

// With fluid gaps
<div className="grid grid-cols-1 md:grid-cols-2" 
     style={{ gap: 'clamp(1rem, 4vw, 2rem)' }}>

// Four column grid (1 → 2 → 4)
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-responsive">
```

### 🔘 Buttons
```jsx
// Primary button (always use these classes)
<button className="btn-primary">Click Me</button>

// Outline button
<button className="btn-outline">Learn More</button>

// Ghost button
<button className="btn-ghost">View All</button>

// Full width on mobile, auto on desktop
<button className="btn-primary w-full xs:w-auto">Submit</button>
```

### 📦 Cards
```jsx
// Dark card
<div className="card-dark p-5 sm:p-7 lg:p-8">
  Content
</div>

// Glass card
<div className="card-glass p-6 sm:p-8">
  Content
</div>

// With responsive padding
<div className="card-dark p-responsive">
  Content
</div>
```

### 🎨 Spacing
```jsx
// Section padding
<section className="section-pad bg-brand-black">

// Smaller section padding
<section className="section-pad-sm bg-brand-dark">

// Custom fluid padding
<div style={{ padding: 'clamp(1rem, 4vw, 2rem)' }}>

// Using utility classes
<div className="p-responsive">
<div className="gap-responsive-lg">
```

### 📱 Container
```jsx
// Standard container (always use this)
<div className="container-mv">
  Content
</div>

// Custom max-width container
<div className="container-mv max-w-4xl mx-auto">
  Narrower content
</div>
```

### 🖼️ Images
```jsx
// Responsive image with aspect ratio
<div className="relative w-full aspect-video">
  <img src={src} alt="" className="w-full h-full object-cover" />
</div>

// Fluid height image container
<div className="relative" style={{ height: 'clamp(15rem, 40vw, 25rem)' }}>
  <img src={src} alt="" className="w-full h-full object-cover" />
</div>
```

### 🔄 Flexbox Layouts
```jsx
// Vertical on mobile, horizontal on desktop
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

// Center content
<div className="flex items-center justify-center gap-2">

// Space between with wrap
<div className="flex flex-wrap items-center justify-between gap-3">
```

### 👁️ Visibility
```jsx
// Hide on mobile, show on desktop
<div className="hidden lg:block">Desktop only</div>

// Show on mobile, hide on desktop
<div className="block lg:hidden">Mobile only</div>

// Different layouts for different screens
<div className="flex lg:grid lg:grid-cols-3">
```

### 📏 Width & Height
```jsx
// Full width on mobile, auto on desktop
<div className="w-full sm:w-auto">

// Fluid width
<div style={{ width: 'clamp(20rem, 50vw, 40rem)' }}>

// Fluid height
<div style={{ height: 'clamp(20vh, 50vh, 80vh)' }}>
```

### 🎪 Modals & Overlays
```jsx
// Responsive modal
<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
  <div className="w-full max-w-lg sm:max-w-xl lg:max-w-4xl">
    <div className="bg-brand-card p-5 sm:p-8 lg:p-12">
      Content
    </div>
  </div>
</div>
```

## 🎯 Breakpoint Cheat Sheet

```
xxs: 320px   (Small phones)
xs:  480px   (Large phones)  
sm:  640px   (Tablets portrait)
md:  768px   (Tablets landscape)
lg:  1024px  (Desktop)
xl:  1280px  (Large desktop)
2xl: 1536px  (Extra large)
3xl: 1920px  (Full HD)
4xl: 2560px  (4K)
```

## 🔧 Common Patterns by Component Type

### Navigation Bar
```jsx
<header className="fixed top-0 left-0 right-0 z-50">
  <div className="container-mv">
    <div className="flex items-center justify-between" 
         style={{ height: 'clamp(4rem, 10vw, 5rem)' }}>
      {/* Logo */}
      <img src={logo} alt="" 
           style={{ height: 'clamp(2rem, 5vw, 3rem)' }} />
      
      {/* Desktop Nav */}
      <nav className="hidden xl:flex items-center gap-6">
        Navigation links
      </nav>
      
      {/* Mobile Menu Button */}
      <button className="xl:hidden" 
              style={{ width: '44px', height: '44px' }}>
        Menu
      </button>
    </div>
  </div>
</header>
```

### Hero Section
```jsx
<section className="page-hero">
  <div className="container-mv text-center">
    <h1 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)' }}>
      Hero Title
    </h1>
    <p style={{ 
      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      maxWidth: 'clamp(20rem, 60vw, 40rem)'
    }}>
      Hero subtitle
    </p>
    <div className="flex flex-col xs:flex-row gap-3 mt-8">
      <button className="btn-primary">CTA</button>
      <button className="btn-outline">Secondary</button>
    </div>
  </div>
</section>
```

### Feature Cards
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
  {features.map(feature => (
    <div key={feature.id} className="card-dark p-5 sm:p-7">
      <div className="w-12 h-12 sm:w-14 sm:h-14 
                      bg-brand-red/10 border border-brand-red/25 
                      flex items-center justify-center mb-4">
        <Icon size={20} className="text-brand-red" />
      </div>
      <h3 className="text-base sm:text-lg font-bold mb-2">
        {feature.title}
      </h3>
      <p className="text-xs sm:text-sm text-brand-silver">
        {feature.description}
      </p>
    </div>
  ))}
</div>
```

### Forms
```jsx
<form className="space-y-4 sm:space-y-5">
  <div>
    <label className="block text-xs uppercase tracking-widest mb-2">
      Name
    </label>
    <input 
      type="text"
      className="input-field"
      style={{ minHeight: '44px' }}
    />
  </div>
  
  <div className="grid sm:grid-cols-2 gap-4">
    <input className="input-field" placeholder="Email" />
    <input className="input-field" placeholder="Phone" />
  </div>
  
  <button type="submit" 
          className="btn-primary w-full sm:w-auto justify-center">
    Submit
  </button>
</form>
```

### Stats Section
```jsx
<section className="bg-brand-dark border-y border-brand-border">
  <div className="container-mv">
    <div className="grid grid-cols-2 md:grid-cols-4">
      {stats.map((stat, i) => (
        <div key={stat.id} 
             className={`text-center px-4 py-6 sm:py-8
                        ${i < 3 ? 'border-r border-brand-border' : ''}
                        ${i < 2 ? 'border-b md:border-b-0' : ''}`}>
          <div className="stat-number">
            {stat.value}{stat.suffix}
          </div>
          <p className="text-2xs sm:text-xs text-brand-silver mt-2">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
```

## 💡 Pro Tips

1. **Always use `clamp()` for fluid sizing**
   ```jsx
   fontSize: 'clamp(min, preferred, max)'
   ```

2. **Maintain 44px minimum touch targets**
   ```jsx
   style={{ minHeight: '44px', minWidth: '44px' }}
   ```

3. **Use semantic breakpoints**
   - Mobile first: base styles
   - sm: tablets portrait  
   - lg: desktop
   - xl: large desktop

4. **Test on real devices**
   - iPhone SE (smallest)
   - Standard phones (375-414px)
   - Tablets (768-1024px)
   - Desktop (1280px+)

5. **Disable hover on touch**
   ```css
   @media (hover: none) {
     .hover-class:hover {
       /* Remove hover effects */
     }
   }
   ```

6. **Use responsive utility classes**
   ```jsx
   className="text-responsive-base gap-responsive p-responsive"
   ```

## 🚀 Quick Start Template

```jsx
export default function MyComponent() {
  return (
    <section className="section-pad bg-brand-black">
      <div className="container-mv">
        <AnimatedSection>
          <SectionTitle 
            label="Section Label"
            title={<>Section <span className="text-red-gradient">Title</span></>}
            center 
          />
        </AnimatedSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-responsive">
          {/* Card content */}
          <div className="card-dark p-responsive">
            <h3 className="text-responsive-lg font-bold mb-3">
              Card Title
            </h3>
            <p className="text-responsive-sm text-brand-silver">
              Card description
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## ✅ Checklist for New Components

- [ ] Uses `clamp()` for fluid sizing
- [ ] Responsive grid/flex layout
- [ ] Touch targets ≥ 44px
- [ ] Works on 320px width
- [ ] Works on 4K displays
- [ ] Proper spacing (sm, md, lg variants)
- [ ] Accessible (ARIA, focus states)
- [ ] Hover disabled on touch devices
- [ ] Text remains readable at all sizes
- [ ] No horizontal scroll

---

**Remember**: Test early, test often, test on real devices! 📱
