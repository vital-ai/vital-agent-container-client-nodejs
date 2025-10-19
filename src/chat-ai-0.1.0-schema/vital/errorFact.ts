import { VITAL_Fact } from './vitalFact';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#ErrorFact
 */
export class ErrorFact extends VITAL_Fact {
  public errorMessage?: string;
  public errorType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#ErrorFact';
  }

  /**
   * Get property definitions for ErrorFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasErrorMessage',
        tsPropertyName: 'errorMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasErrorType',
        tsPropertyName: 'errorType',
        type: 'string',
        required: false
      }
    ];
  }


}
