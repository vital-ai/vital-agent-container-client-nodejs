import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#NlpRelationInstance
 */
export class NlpRelationInstance extends VITAL_Node {
  public relationType?: string;
  public entityAuthor?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#NlpRelationInstance';
  }

  /**
   * Get property definitions for NlpRelationInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasRelationType',
        tsPropertyName: 'relationType',
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
