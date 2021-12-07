import React, { useState } from 'react';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Acorn from '../assets/icons/svg/acorn-duotone.svg';
import Upload from '../components/Upload';

function Buttons() {
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [loading4, setLoading4] = useState(false);

  const [disabled5, setDisabled5] = useState(false);
  const [disabled6, setDisabled6] = useState(false);
  const [disabled7, setDisabled7] = useState(false);
  const [disabled8, setDisabled8] = useState(false);

  function clickHandler1() {
    setLoading1(true);
    // setTimeout(() => {
    //   setLoading1(false);
    // }, 10000);
  }

  function clickHandler2() {
    setLoading2(true);
    setTimeout(() => {
      setLoading2(false);
    }, 10000);
  }

  function clickHandler3() {
    setLoading3(true);
    setTimeout(() => {
      setLoading3(false);
    }, 3000);
  }

  function clickHandler4() {
    setLoading4(true);
    setTimeout(() => {
      setLoading4(false);
    }, 3000);
  }

  function clickHandler5() {
    setDisabled5(true);
    setTimeout(() => {
      setDisabled5(false);
    }, 3000);
  }

  function clickHandler6() {
    setDisabled6(true);
    setTimeout(() => {
      setDisabled6(false);
    }, 3000);
  }

  function clickHandler7() {
    setDisabled7(true);
    setTimeout(() => {
      setDisabled7(false);
    }, 3000);
  }

  function clickHandler8() {
    setDisabled8(true);
    setTimeout(() => {
      setDisabled8(false);
    }, 3000);
  }

  function clickHandler9() {
    console.log('blur');
  }

  function uploadHandler(e: any) {
    console.log(e.currentTarget.files);
  }

  return (
    <div className="rc-buttons">
      <section className="rc-button-variant">
        <div className="rc-title">Basic button</div>
        <div className="rc-group">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="info">Info</Button>
          <Button variant="light">Light</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="link" onBlur={clickHandler9}>
            Link
          </Button>
        </div>
      </section>
      <section className="rc-button-type">
        <div className="rc-title">Types button</div>
        <div className="rc-group">
          <Button variant="primary" type="button">
            Button
          </Button>
          <Button variant="primary" type="reset">
            Reset
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </section>
      <section className="rc-button-outline">
        <div className="rc-title">Outline button</div>
        <div className="rc-group">
          <Button variant="outline-primary">Primary</Button>
          <Button variant="outline-secondary">Secondary</Button>
          <Button variant="outline-success">Success</Button>
          <Button variant="outline-danger">Danger</Button>
          <Button variant="outline-warning">Warning</Button>
          <Button variant="outline-info">Info</Button>
          <Button variant="outline-light">Light</Button>
          <Button variant="outline-dark">Dark</Button>
        </div>
      </section>
      <section className="rc-button-size">
        <div className="rc-title">Size button</div>
        <div className="rc-group">
          <Button variant="primary" size="sm">
            Small button
          </Button>
          <Button variant="primary">Normal button</Button>
          <Button variant="primary" size="lg">
            Large button
          </Button>
        </div>
      </section>
      <section className="rc-button-with-icon">
        <div className="rc-title">Icon button</div>
        <div className="rc-group">
          <Button variant="primary" prefixIcon={<Icon component={Acorn} />}>
            Primary
          </Button>
          <Button variant="outline-success" prefixIcon={<Icon component={Acorn} />} />
          <Button variant="danger" prefixIcon={<Icon component={Acorn} />} />
          <Button variant="warning" prefixIcon={<Icon component={Acorn} />} />
          <Button variant="link" prefixIcon={<Icon component={Acorn} />}>
            Link
          </Button>
          <Button variant="primary" size="lg" prefixIcon={<Icon component={Acorn} size="lg" />}>
            Primary
          </Button>
          <Button
            variant="outline-success"
            size="sm"
            prefixIcon={<Icon component={Acorn} size="sm" />}
          />
        </div>
      </section>
      <section className="rc-button-with-suffix-icon">
        <div className="rc-title">Suffix icon button</div>
        <div className="rc-group">
          <Button variant="primary" suffixIcon={<Icon component={Acorn} />}>
            Primary
          </Button>
        </div>
      </section>
      <section className="rc-button-with-loading">
        <div className="rc-title">Loading button</div>
        <div className="rc-group">
          <Button
            isLoading={loading1}
            prefixIcon={<Icon component={Acorn} />}
            onClick={clickHandler1}
          />
          <Button
            isLoading={loading2}
            prefixIcon={<Icon component={Acorn} />}
            onClick={clickHandler2}
          >
            Button
          </Button>
          <Button isLoading={loading3} onClick={clickHandler3}>
            Button
          </Button>
          <Button
            isLoading={loading4}
            spinnerIcon={<Icon component={Acorn} isRotating />}
            onClick={clickHandler4}
          >
            Button
          </Button>
        </div>
      </section>
      <section className="rc-button-disabled">
        <div className="rc-title">Disabled button</div>
        <div className="rc-group">
          <Button
            prefixIcon={<Icon component={Acorn} />}
            onClick={clickHandler5}
            isDisabled={disabled5}
          />
          <Button
            isDisabled={disabled6}
            variant="secondary"
            prefixIcon={<Icon component={Acorn} />}
            onClick={clickHandler6}
          >
            Button
          </Button>
          <Button isDisabled={disabled7} variant="success" onClick={clickHandler7}>
            Button
          </Button>
          <Button
            isDisabled={disabled8}
            variant="danger"
            spinnerIcon={<Icon component={Acorn} isRotating />}
            onClick={clickHandler8}
          >
            Button
          </Button>
        </div>
      </section>
      <div className="rc-button-toggle">
        <div className="rc-title">Toggle button</div>
        <div className="rc-group">
          <Button
            variant="primary"
            isLoading={loading1}
            prefixIcon={<Icon component={Acorn} />}
            onClick={clickHandler1}
          >
            <Upload onChange={uploadHandler}>Upload</Upload>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
