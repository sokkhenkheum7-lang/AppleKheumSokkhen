export default function Backdrop({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        top-11
        z-40
        bg-gray/20
        backdrop-blur-sm
        hidden
        md:block
      "
    />
  );
}