import { Button, Box } from "@chakra-ui/react"

function style(color, isActive) {
  if (isActive) {
    return {
      color: "white",
      bg: `#${color}`,
      _active: {
        bg: `#${color}`,
      },
      _hover: {
        bg: `#${color}`,
        boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.15)"
      }
    }
  } else {
    return {
      color: `#${color}`,
      borderColor: `#${color}`,
      bg: "white",
      _active: {
        bg: "white",
      },
      _hover: {
        bg: "white",
        boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.15)"
      }
    }
  }
}

export default function Tag({ click, name, tagFilter, color, children }) {
  const isActive = tagFilter.includes(name);
  const styles = style(color, isActive)
  return (
    <Button
      fontSize={[10, 10, 12, 12, 12]}
      p={2}
      minWidth="inherit"
      height="inherit"
      border="2px"
      onClick={() => click(name, tagFilter)}
      isActive={isActive}
      {...styles}
    >
      <Box display={['none', 'none', 'inherit', 'inherit', 'inherit']}>
        {children}
      </Box>
    </Button>
  )
}
