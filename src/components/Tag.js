import { Button } from "@chakra-ui/react"

function style(color, isActive) {
  if (isActive) {
    return {
      color: `#${color}`,
      borderColor: `#${color}`,
      _active: {
        bg: "white",
      }
    }
  } else {
    return {
      color: "white",
      bg: `#${color}`,
    }

  }
}

export default function Tag({ click, name, tagFilter, color, children }) {
  const isActive = tagFilter.includes(name);
  const styles = style(color, isActive)
  return (
    <Button
      fontSize={[10, 10, 12, 12, 12]}
      p={1}
      minWidth="inherit"
      height="inherit"
      border="2px"
      onClick={() => click(name, tagFilter)}
      isActive={isActive}
      {...styles}
    >
      {children}
    </Button>
  )
}
