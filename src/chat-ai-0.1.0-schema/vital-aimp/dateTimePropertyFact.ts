import { PropertyFact } from './propertyFact';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DateTimePropertyFact
 */
export class DateTimePropertyFact extends PropertyFact {
  public dateValue?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DateTimePropertyFact';
  }

  /**
   * Get property definitions for DateTimePropertyFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDateValue',
        tsPropertyName: 'dateValue',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
