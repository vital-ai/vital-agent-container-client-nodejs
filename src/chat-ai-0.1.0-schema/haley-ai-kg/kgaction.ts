import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGAction
 */
export class KGAction extends VITAL_Node {
  public kGActionAttemptDateTime?: string | Date;
  public kGActionType?: string;
  public kGActionStatusURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGAction';
  }

  /**
   * Get property definitions for KGAction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGActionAttemptDateTime',
        tsPropertyName: 'kGActionAttemptDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGActionType',
        tsPropertyName: 'kGActionType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGActionStatusURI',
        tsPropertyName: 'kGActionStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
