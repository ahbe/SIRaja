import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row, Field, Part } from '../../../shared/Part';

function Tax({ t, tax, handleTaxChange }) {
  return [
    <label key="label" className="itemLabel">
      {t('settings:fields:taxSettings')}
    </label>,
    <Part key="part">
      <Row>

      </Row>
      <Row>
        <Field>
          <label className="itemLabel">{t('common:amount')}</label>
          <input
            name="amount"
            //type="number"
            step="0.01"
            value={tax.amount}
            onChange={handleTaxChange}
            placeholder={t('common:amount')}
          />
        </Field>

      </Row>
    </Part>,
  ];
}

Tax.propTypes = {
  tax: PropTypes.object.isRequired,
  handleTaxChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default Tax;
