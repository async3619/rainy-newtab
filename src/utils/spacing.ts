function spacing(
  top: number,
  right: number,
  bottom: number,
  left: number,
): string
function spacing(top: number, leftRight: number, bottom: number): string
function spacing(vertical: number, horizontal: number): string
function spacing(all: number): string

function spacing(...args: number[]): string {
  return args.map((value) => `${value * 8}px`).join(' ')
}

export default spacing
