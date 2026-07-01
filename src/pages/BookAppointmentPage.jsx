import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, ArrowLeft, CheckCircle, Calendar, User, Wrench, ClipboardCheck } from 'lucide-react';

import SEO from '@/components/SEO/SEO';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import { SERVICES } from '@/data/siteData';

const TOTAL_STEPS = 4;

const TIME_SLOTS = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
  '4:00 PM', '5:00 PM',
];

const STEP_LABELS = [
  { label: 'Personal Info', icon: User },
  { label: 'Service', icon: Wrench },
  { label: 'Date & Time', icon: Calendar },
  { label: 'Confirm', icon: ClipboardCheck },
];

const INITIAL_STATE = {
  // Step 1
  name: '',
  email: '',
  phone: '',
  city: '',
  // Step 2
  service: '',
  vehicleType: '',
  vehicleMake: '',
  vehicleModel: '',
  // Step 3
  date: '',
  time: '',
  address: '',
  serviceType: 'studio', // 'studio' | 'doorstep'
  // Step 4 (review only)
  notes: '',
};

function validate(step, values) {
  const errors = {};
  if (step === 1) {
    if (!values.name.trim()) errors.name = 'Name is required';
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Valid email required';
    if (!values.phone.trim() || !/^[+\d\s-]{8,15}$/.test(values.phone)) errors.phone = 'Valid phone required';
    if (!values.city.trim()) errors.city = 'City is required';
  }
  if (step === 2) {
    if (!values.service) errors.service = 'Please select a service';
    if (!values.vehicleType) errors.vehicleType = 'Please select vehicle type';
    if (!values.vehicleMake.trim()) errors.vehicleMake = 'Vehicle make is required';
    if (!values.vehicleModel.trim()) errors.vehicleModel = 'Vehicle model is required';
  }
  if (step === 3) {
    if (!values.date) errors.date = 'Please select a date';
    if (!values.time) errors.time = 'Please select a time slot';
    if (values.serviceType === 'doorstep' && !values.address.trim()) errors.address = 'Address is required for doorstep service';
  }
  return errors;
}

// ── Progress Bar ──────────────────────────────────────────────
function ProgressBar({ current }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-12">
      {STEP_LABELS.map((step, i) => {
        const stepNum = i + 1;
        const isActive = stepNum === current;
        const isDone = stepNum < current;
        const Icon = step.icon;

        return (
          <div key={step.label} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-12 h-12 flex items-center justify-center transition-all duration-300
                  ${isDone ? 'bg-brand-red text-white' : isActive ? 'bg-brand-red text-white' : 'bg-brand-card border border-brand-border text-brand-silver'}`}
                aria-current={isActive ? 'step' : undefined}
              >
                {isDone ? <Check size={18} /> : <Icon size={18} />}
              </div>
              <span className={`text-xs mt-2 uppercase tracking-wider hidden sm:block ${isActive || isDone ? 'text-brand-red' : 'text-brand-silver'}`}>
                {step.label}
              </span>
            </div>
            {i < STEP_LABELS.length - 1 && (
              <div className={`w-16 sm:w-24 h-px mb-5 transition-all duration-300 ${isDone ? 'bg-brand-red' : 'bg-brand-border'}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Field Error ───────────────────────────────────────────────
function FieldError({ msg }) {
  return msg ? <p className="text-red-400 text-xs mt-1">{msg}</p> : null;
}

export default function BookAppointmentPage() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleNext = () => {
    const newErrors = validate(step, values);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };

  const handleBack = () => {
    setErrors({});
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  if (submitted) {
    return (
      <>
        <SEO title="Booking Confirmed" />
        <section className="min-h-screen bg-brand-black flex items-center justify-center pt-20">
          <div className="container-mv text-center max-w-lg">
            <div className="card-dark p-12">
              <div className="w-20 h-20 bg-brand-red/10 border-2 border-brand-red flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-brand-red" />
              </div>
              <h1 className="font-display text-3xl font-bold text-brand-white mb-4">Booking Confirmed!</h1>
              <p className="text-brand-silver mb-3">
                Thank you, <span className="text-brand-red">{values.name}</span>! Your appointment request has been received.
              </p>
              <p className="text-brand-silver text-sm mb-8">
                Our team will confirm your booking within 2 hours via call or WhatsApp to{' '}
                <span className="text-brand-white">{values.phone}</span>.
              </p>
              <div className="bg-brand-dark border border-brand-border p-6 text-left space-y-2 mb-8">
                <p className="text-brand-silver text-sm"><span className="text-brand-red font-semibold">Service:</span> {values.service}</p>
                <p className="text-brand-silver text-sm"><span className="text-brand-red font-semibold">Vehicle:</span> {values.vehicleMake} {values.vehicleModel}</p>
                <p className="text-brand-silver text-sm"><span className="text-brand-red font-semibold">Date:</span> {values.date} at {values.time}</p>
                <p className="text-brand-silver text-sm"><span className="text-brand-red font-semibold">Type:</span> {values.serviceType === 'doorstep' ? 'Doorstep Service' : 'Studio Visit'}</p>
              </div>
              <Link to="/" className="btn-primary justify-center">
                Back to Home <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Book Appointment"
        description="Book your car detailing, ceramic coating, or PPF appointment with MotorView. Fast, easy online booking available 24/7."
        keywords="book car detailing appointment, ceramic coating booking, PPF appointment India"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,0,0,0.06)_0%,transparent_70%)]" />
        <div className="container-mv relative z-10 text-center">
          <AnimatedSection>
            <span className="section-label justify-center">Online Booking</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-white mt-2">
              Book an <span className="text-red-gradient">Appointment</span>
            </h1>
            <div className="w-16 h-0.5 bg-gradient-red mt-5 mx-auto" />
            <p className="mt-4 text-brand-silver text-base max-w-lg mx-auto">
              Complete your booking in 4 simple steps. We'll confirm within 2 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Multi-step Form */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv max-w-3xl mx-auto">
          <ProgressBar current={step} />

          <div className="card-dark p-8 md:p-12">
            {/* ── STEP 1: Personal Info ── */}
            {step === 1 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-brand-white mb-8">
                  Step 1 — <span className="text-red-gradient">Personal Information</span>
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-brand-silver text-xs uppercase tracking-widest mb-2" htmlFor="name">
                      Full Name <span className="text-brand-red">*</span>
                    </label>
                    <input id="name" name="name" type="text" value={values.name} onChange={handleChange}
                      placeholder="Your full name" className={`input-field ${errors.name ? 'border-red-500' : ''}`} autoComplete="name" />
                    <FieldError msg={errors.name} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-brand-silver text-xs uppercase tracking-widest mb-2" htmlFor="email">
                        Email <span className="text-brand-red">*</span>
                      </label>
                      <input id="email" name="email" type="email" value={values.email} onChange={handleChange}
                        placeholder="your@email.com" className={`input-field ${errors.email ? 'border-red-500' : ''}`} autoComplete="email" />
                      <FieldError msg={errors.email} />
                    </div>
                    <div>
                      <label className="block text-brand-silver text-xs uppercase tracking-widest mb-2" htmlFor="phone">
                        Phone <span className="text-brand-red">*</span>
                      </label>
                      <input id="phone" name="phone" type="tel" value={values.phone} onChange={handleChange}
                        placeholder="+91 98765 43210" className={`input-field ${errors.phone ? 'border-red-500' : ''}`} autoComplete="tel" />
                      <FieldError msg={errors.phone} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-brand-silver text-xs uppercase tracking-widest mb-2" htmlFor="city">
                      City <span className="text-brand-red">*</span>
                    </label>
                    <input id="city" name="city" type="text" value={values.city} onChange={handleChange}
                      placeholder="Your city" className={`input-field ${errors.city ? 'border-red-500' : ''}`} />
                    <FieldError msg={errors.city} />
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 2: Service Selection ── */}
            {step === 2 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-brand-white mb-8">
                  Step 2 — <span className="text-red-gradient">Select Your Service</span>
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-brand-silver text-xs uppercase tracking-widest mb-3">
                      Service <span className="text-brand-red">*</span>
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {SERVICES.map((svc) => (
                        <button
                          key={svc.id}
                          type="button"
                          onClick={() => { setValues((p) => ({ ...p, service: svc.title })); if (errors.service) setErrors((p) => ({ ...p, service: '' })); }}
                          className={`p-4 border text-left transition-all duration-200
                            ${values.service === svc.title ? 'border-brand-red bg-brand-red/10 text-brand-white' : 'border-brand-border text-brand-silver hover:border-brand-red/40'}`}
                          aria-pressed={values.service === svc.title}
                        >
                          <p className="font-semibold text-sm">{svc.title}</p>
                          <p className="text-xs mt-1 opacity-70">{svc.priceRange}</p>
                        </button>
                      ))}
                    </div>
                    <FieldError msg={errors.service} />
                  </div>

                  <div>
                    <label className="block text-brand-silver text-xs uppercase tracking-widest mb-2" htmlFor="vehicleType">
                      Vehicle Type <span className="text-brand-red">*</span>
                    </label>
                    <select id="vehicleType" name="vehicleType" value={values.vehicleType} onChange={handleChange}
                      className={`input-field ${errors.vehicleType ? 'border-red-500' : ''}`}>
                      <option value="">Select vehicle type</option>
                      <option>Hatchback</option>
                      <option>Sedan</option>
                      <option>SUV</option>
                      <option>Luxury Car</option>
                      <option>Sports Car</option>
                      <option>Motorcycle</option>
                      <option>Other</option>
                    </select>
                    <FieldError msg={errors.vehicleType} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-brand-silver text-xs uppercase tracking-widest mb-2" htmlFor="vehicleMake">
                        Vehicle Make <span className="text-brand-red">*</span>
                      </label>
                      <input id="vehicleMake" name="vehicleMake" type="text" value={values.vehicleMake} onChange={handleChange}
                        placeholder="e.g. BMW, Mercedes" className={`input-field ${errors.vehicleMake ? 'border-red-500' : ''}`} />
                      <FieldError msg={errors.vehicleMake} />
                    </div>
                    <div>
                      <label className="block text-brand-silver text-xs uppercase tracking-widest mb-2" htmlFor="vehicleModel">
                        Vehicle Model <span className="text-brand-red">*</span>
                      </label>
                      <input id="vehicleModel" name="vehicleModel" type="text" value={values.vehicleModel} onChange={handleChange}
                        placeholder="e.g. 3 Series, GLE" className={`input-field ${errors.vehicleModel ? 'border-red-500' : ''}`} />
                      <FieldError msg={errors.vehicleModel} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 3: Date & Time ── */}
            {step === 3 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-brand-white mb-8">
                  Step 3 — <span className="text-red-gradient">Choose Date & Time</span>
                </h2>
                <div className="space-y-6">
                  {/* Service type toggle */}
                  <div>
                    <label className="block text-brand-silver text-xs uppercase tracking-widest mb-3">
                      Service Location <span className="text-brand-red">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: 'studio', label: 'Studio Visit', desc: 'Bring your vehicle to our studio' },
                        { value: 'doorstep', label: 'Doorstep Service', desc: 'We come to your location' },
                      ].map((opt) => (
                        <button key={opt.value} type="button"
                          onClick={() => setValues((p) => ({ ...p, serviceType: opt.value }))}
                          className={`p-4 border text-left transition-all
                            ${values.serviceType === opt.value ? 'border-brand-red bg-brand-red/10 text-brand-white' : 'border-brand-border text-brand-silver hover:border-brand-red/40'}`}
                          aria-pressed={values.serviceType === opt.value}
                        >
                          <p className="font-semibold text-sm">{opt.label}</p>
                          <p className="text-xs mt-1 opacity-70">{opt.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-brand-silver text-xs uppercase tracking-widest mb-2" htmlFor="date">
                      Preferred Date <span className="text-brand-red">*</span>
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={values.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`input-field ${errors.date ? 'border-red-500' : ''}`}
                      style={{ colorScheme: 'dark' }}
                    />
                    <FieldError msg={errors.date} />
                  </div>

                  <div>
                    <label className="block text-brand-silver text-xs uppercase tracking-widest mb-3">
                      Preferred Time <span className="text-brand-red">*</span>
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {TIME_SLOTS.map((slot) => (
                        <button key={slot} type="button"
                          onClick={() => { setValues((p) => ({ ...p, time: slot })); if (errors.time) setErrors((p) => ({ ...p, time: '' })); }}
                          className={`py-2.5 text-xs font-medium uppercase tracking-wide border transition-all
                            ${values.time === slot ? 'border-brand-red bg-brand-red text-white' : 'border-brand-border text-brand-silver hover:border-brand-red/40'}`}
                          aria-pressed={values.time === slot}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                    <FieldError msg={errors.time} />
                  </div>

                  {values.serviceType === 'doorstep' && (
                    <div>
                      <label className="block text-brand-silver text-xs uppercase tracking-widest mb-2" htmlFor="address">
                        Service Address <span className="text-brand-red">*</span>
                      </label>
                      <textarea id="address" name="address" rows={3} value={values.address} onChange={handleChange}
                        placeholder="Full address where you want the service..." className={`input-field resize-none ${errors.address ? 'border-red-500' : ''}`} />
                      <FieldError msg={errors.address} />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ── STEP 4: Confirm ── */}
            {step === 4 && (
              <form onSubmit={handleSubmit}>
                <h2 className="font-display text-2xl font-bold text-brand-white mb-8">
                  Step 4 — <span className="text-red-gradient">Review & Confirm</span>
                </h2>

                <div className="space-y-4 mb-8">
                  {[
                    { label: 'Name', value: values.name },
                    { label: 'Email', value: values.email },
                    { label: 'Phone', value: values.phone },
                    { label: 'City', value: values.city },
                    { label: 'Service', value: values.service },
                    { label: 'Vehicle', value: `${values.vehicleType} — ${values.vehicleMake} ${values.vehicleModel}` },
                    { label: 'Date', value: values.date },
                    { label: 'Time', value: values.time },
                    { label: 'Location', value: values.serviceType === 'doorstep' ? `Doorstep — ${values.address}` : 'Studio Visit' },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-4 py-3 border-b border-brand-border">
                      <span className="text-brand-silver text-sm w-24 flex-shrink-0">{row.label}</span>
                      <span className="text-brand-white text-sm">{row.value || '—'}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-brand-silver text-xs uppercase tracking-widest mb-2" htmlFor="notes">
                    Additional Notes (Optional)
                  </label>
                  <textarea id="notes" name="notes" rows={3} value={values.notes} onChange={handleChange}
                    placeholder="Any specific concerns or requirements..." className="input-field resize-none" />
                </div>

                <p className="text-brand-silver text-xs mt-4">
                  By confirming, you agree to our service terms. Our team will contact you within 2 hours to finalise the appointment.
                </p>

                <div className="mt-6">
                  <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
                    {loading ? 'Confirming...' : <>Confirm Booking <CheckCircle size={16} /></>}
                  </button>
                </div>
              </form>
            )}

            {/* Navigation Buttons */}
            {step < 4 && (
              <div className={`mt-10 flex ${step > 1 ? 'justify-between' : 'justify-end'}`}>
                {step > 1 && (
                  <button onClick={handleBack} className="btn-outline">
                    <ArrowLeft size={16} /> Back
                  </button>
                )}
                <button onClick={handleNext} className="btn-primary">
                  Next Step <ArrowRight size={16} />
                </button>
              </div>
            )}

            {step === 4 && (
              <div className="mt-4">
                <button onClick={handleBack} className="btn-ghost">
                  <ArrowLeft size={16} /> Back to Edit
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
