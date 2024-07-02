import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from "next/link";

function CardExample() {
  return (
    <div className="d-flex justify-content-around">
      <Card animation="glow" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/notetaking.png" style={{width: "280px", height: "300px", textAlign: "center"}}/>
        <Card.Body>
          <Card.Title animation="glow">NoteKeeper</Card.Title>
          <Link href="/NoteKeeper">
            <Button variant="secondary" style={{ color: 'white', fontFamily: 'sans-serif' }}>
                Try me!
            </Button>
        </Link>
        </Card.Body>
      </Card>

      <Card animation="glow" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/lyricsGen.svg" style={{width: "280px", height: "300px", textAlign: "center"}} />
        <Card.Body>
          <Card.Title animation="glow">Lyrics Generator</Card.Title>
          <Link href="/LyricsGen">
            <Button variant="secondary" style={{ color: 'white', fontFamily: 'sans-serif' }}>
                Try me!
            </Button>
        </Link>
        </Card.Body>
      </Card>

    </div>
  );
}

export default CardExample;
