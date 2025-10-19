import { KGServiceEvent } from './kgserviceEvent';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#MatrixServiceEvent
 */
export class MatrixServiceEvent extends KGServiceEvent {
  public matrixServiceEventType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#MatrixServiceEvent';
  }

  /**
   * Get property definitions for MatrixServiceEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasMatrixServiceEventType',
        tsPropertyName: 'matrixServiceEventType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
