"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MessageLoading } from "@/components/ui/message-loading";

interface ChatBubbleProps {
  variant?: "sent" | "received"
  layout?: "default" | "ai"
  className?: string
  children: React.ReactNode
}

export function ChatBubble({
  variant = "received",
  layout = "default",
  className,
  children,
}: ChatBubbleProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 mb-6",
        variant === "sent" && "flex-row-reverse",
        className,
      )}
    >
      {children}
    </div>
  )
}

interface ChatBubbleMessageProps {
  variant?: "sent" | "received"
  isLoading?: boolean
  className?: string
  children?: React.ReactNode
}

export function ChatBubbleMessage({
  variant = "received",
  isLoading,
  className,
  children,
}: ChatBubbleMessageProps) {
  return (
    <div
      className={cn(
        "rounded-lg px-4 py-3 max-w-[80%] relative",
        variant === "sent" 
          ? "bg-albanian-red text-white ml-auto border border-albanian-gold/20" 
          : "bg-muted text-foreground border border-border/50",
        className
      )}
    >
      {isLoading ? (
        <div className="flex items-center space-x-2">
          <MessageLoading />
        </div>
      ) : (
        children
      )}
      {/* Albanian eagle accent for bot messages */}
      {variant === "received" && !isLoading && (
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-albanian-gold rounded-full opacity-30" />
      )}
    </div>
  )
}

interface ChatBubbleAvatarProps {
  src?: string
  fallback?: string
  className?: string
  variant?: "sent" | "received"
}

export function ChatBubbleAvatar({
  src,
  fallback = "AI",
  className,
  variant = "received",
}: ChatBubbleAvatarProps) {
  return (
    <Avatar className={cn("h-10 w-10 border-2", 
      variant === "sent" ? "border-albanian-red/30" : "border-albanian-gold/30",
      className
    )}>
      {src && <AvatarImage src={src} />}
      <AvatarFallback className={cn(
        "font-semibold text-xs",
        variant === "sent" ? "bg-albanian-red/10 text-albanian-red" : "bg-albanian-gold/10 text-albanian-gold"
      )}>
        {fallback}
      </AvatarFallback>
    </Avatar>
  )
}

interface ChatBubbleActionProps {
  icon?: React.ReactNode
  onClick?: () => void
  className?: string
}

export function ChatBubbleAction({
  icon,
  onClick,
  className,
}: ChatBubbleActionProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("h-8 w-8 hover:bg-albanian-gold/10", className)}
      onClick={onClick}
    >
      {icon}
    </Button>
  )
}

export function ChatBubbleActionWrapper({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn("flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity", className)}>
      {children}
    </div>
  )
} 