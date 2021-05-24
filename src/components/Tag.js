import { Button } from "@chakra-ui/react"

export default function Tag({ click, name, children }) {
  return (
    <Button
      fontSize={[10, 10, 12, 12, 12]}
      p={0}
      minWidth="inherit"
      height="inherit"
      onClick={() => click(name)}
    >
      {children}
    </Button>
  )
}
