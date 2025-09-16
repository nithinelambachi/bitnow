'use client';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-primary-background text-primary-foreground ',
        secondary: 'bg-secondary-background text-secondary-foreground hover:bg-secondary-dark focus:ring-secondary-background',
        outline: 'border-2 border-primary-background text-primary-background bg-transparent hover:bg-primary-light focus:ring-primary-background',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
)

const Button = ({
  text = "Get Started",
  text_font_size = "text-base",
  text_font_family = "Poppins",
  text_font_weight = "font-semibold",
  text_line_height = "leading-relaxed",
  text_text_align = "left",
  text_color = "text-primary-foreground",
  fill_background_color = "bg-primary-background",
  border_border_radius = "rounded-sm",
  
  border_border,
  effect_box_shadow,
  layout_width,
  padding,
  position,
  margin,
  
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = 'button',
  ...props
}) => {
  const hasValidBorder = border_border && typeof border_border === 'string' && border_border?.trim() !== ''
  const hasValidShadow = effect_box_shadow && typeof effect_box_shadow === 'string' && effect_box_shadow?.trim() !== ''
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== ''

  const optionalClasses = [
    hasValidBorder ? `border ${border_border}` : '',
    hasValidShadow ? `shadow-[${effect_box_shadow}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ')

  const customStyles = {
    ...(text_font_family && !text_font_family?.startsWith('font-') && { fontFamily: text_font_family }),
  }

  const styleClasses = [
    text_font_size,
    text_font_family?.startsWith('font-') ? text_font_family : '',
    text_font_weight,
    text_line_height,
    text_text_align === 'center' ? 'text-center' : text_text_align === 'right' ? 'text-right' : 'text-left',
    text_color,
    !variant ? fill_background_color : '',
    border_border_radius,
  ]?.filter(Boolean)?.join(' ')

  const handleClick = (event) => {
    if (disabled) {
      event?.preventDefault()
      return
    }
    
    if (typeof onClick === 'function') {
      onClick(event)
    }
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={customStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        styleClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  )
}

export default Button