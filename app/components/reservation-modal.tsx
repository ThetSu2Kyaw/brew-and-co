"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/docs/design/components/button";
import { Input } from "@/docs/design/components/input";
import { X, Calendar, Users, User, Clock, CheckCircle } from "lucide-react";

interface ReservationModalProps {
  open: boolean;
  onClose: () => void;
}

export function ReservationModal({ open, onClose }: ReservationModalProps) {
  const [name, setName] = useState("");
  const [partySize, setPartySize] = useState("2");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setPartySize("2");
    setDate("");
    setTime("");
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleReset}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-8 shadow-xl dark:bg-charcoal">
        {/* Close button */}
        <button
          type="button"
          onClick={handleReset}
          className="absolute right-5 top-5 rounded-lg p-1 text-stone-400 transition-colors hover:text-espresso hover:bg-stone-100 dark:hover:text-cream dark:hover:bg-espresso-light"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {submitted ? (
          /* Success state */
          <div className="flex flex-col items-center py-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sage/10">
              <CheckCircle size={36} className="text-sage" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold text-espresso dark:text-cream">
              Reservation Confirmed
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-500">
              Thanks, {name}! We&apos;ll see you on <strong>{date}</strong> at{" "}
              <strong>{time}</strong>.
            </p>
            <Button variant="solid" className="mt-8" onClick={handleReset}>
              Done
            </Button>
          </div>
        ) : (
          /* Form */
          <>
            <div className="mb-6">
              <h2 className="font-display text-2xl font-semibold text-espresso dark:text-cream">
                Reserve a Table
              </h2>
              <p className="mt-1 text-sm text-stone-500">
                Book your spot at Brew and Go.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <Input
                variant="filled"
                label="Your Name"
                placeholder="e.g. Alex"
                value={name}
                onChange={(e) => setName(e.target.value)}
                icon={<User size={16} />}
                required
              />

              <Input
                variant="filled"
                label="Party Size"
                type="number"
                min={1}
                max={20}
                value={partySize}
                onChange={(e) => setPartySize(e.target.value)}
                icon={<Users size={16} />}
                required
              />

              <Input
                variant="filled"
                label="Date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                icon={<Calendar size={16} />}
                required
              />

              <Input
                variant="filled"
                label="Time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                icon={<Clock size={16} />}
                required
              />

              <Button variant="solid" size="lg" type="submit" fullWidth>
                Confirm Reservation
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
