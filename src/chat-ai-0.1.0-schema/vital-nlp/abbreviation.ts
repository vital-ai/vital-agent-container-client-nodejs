import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#Abbreviation
 */
export class Abbreviation extends VITAL_Node {
  public shortForm?: string;
  public longForm?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#Abbreviation';
  }

  /**
   * Get property definitions for Abbreviation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasShortForm',
        tsPropertyName: 'shortForm',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasLongForm',
        tsPropertyName: 'longForm',
        type: 'string',
        required: false
      }
    ];
  }


}
