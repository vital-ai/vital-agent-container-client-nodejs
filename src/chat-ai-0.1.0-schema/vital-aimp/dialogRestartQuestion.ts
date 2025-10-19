import { DialogElement } from './dialogElement';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogRestartQuestion
 */
export class DialogRestartQuestion extends DialogElement {
  public questionID?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogRestartQuestion';
  }

  /**
   * Get property definitions for DialogRestartQuestion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionID',
        tsPropertyName: 'questionID',
        type: 'string',
        required: false
      }
    ];
  }


}
