import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#EventInstance
 */
export class EventInstance extends VITAL_Node {
  public eventInstanceType?: string;
  public entityAuthor?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#EventInstance';
  }

  /**
   * Get property definitions for EventInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasEventInstanceType',
        tsPropertyName: 'eventInstanceType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasEntityAuthor',
        tsPropertyName: 'entityAuthor',
        type: 'string',
        required: false
      }
    ];
  }


}
