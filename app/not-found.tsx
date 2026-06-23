import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black">
      <Container className="text-center">
        <p className="label mb-6">404</p>
        <h1 className="font-display text-3xl md:text-5xl font-medium leading-tight text-balance">
          This page does not exist.
        </h1>
        <p className="mt-5 text-base text-bone-dim max-w-md mx-auto leading-relaxed">
          The page you are looking for has moved or was never built.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/" variant="secondary">
            Return Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
