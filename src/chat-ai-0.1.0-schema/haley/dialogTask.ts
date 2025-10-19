import { HaleyTask } from './haleyTask';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#DialogTask
 */
export class DialogTask extends HaleyTask {
  public entityURI?: string;
  public dialogURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#DialogTask';
  }

  /**
   * Get property definitions for DialogTask
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasEntityURI',
        tsPropertyName: 'entityURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDialogURI',
        tsPropertyName: 'dialogURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
