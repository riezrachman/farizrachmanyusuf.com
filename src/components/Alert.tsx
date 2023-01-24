import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

interface AlertProps {
  label: string;
  type: "warning" | "danger" | "success" | "info";
}

const BackgroundColorClassName = {
  warning: "border-yellow-400 bg-yellow-50",
  danger: "border-red-400 bg-red-50",
  success: "border-green-400 bg-green-50",
  info: "border-blue-400 bg-blue-50",
};

const Icon = {
  warning: ExclamationTriangleIcon,
  danger: XCircleIcon,
  success: CheckCircleIcon,
  info: InformationCircleIcon,
};

const IconColorClassName = {
  warning: "text-yellow-400",
  danger: "text-red-400",
  success: "text-green-400",
  info: "text-blue-400",
};

const TextColorClassName = {
  warning: "text-yellow-700",
  danger: "text-red-700",
  success: "text-green-700",
  info: "text-blue-700",
};

export default function Alert({
  type,
  label = "Alert Example...",
}: AlertProps) {
  const IconComponent = Icon[type];
  return (
    <div className={clsx("border-l-2 p-4", BackgroundColorClassName[type])}>
      <div className="flex">
        <div className="flex-shrink-0">
          <IconComponent
            className={clsx("h-5 w-5", IconColorClassName[type])}
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className={clsx("text-sm", TextColorClassName[type])}>{label}</p>
        </div>
      </div>
    </div>
  );
}
