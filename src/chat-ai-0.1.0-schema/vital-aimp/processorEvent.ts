import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ProcessorEvent
 */
export class ProcessorEvent extends VITAL_Node {
  public processorEventTypeURI?: string;
  public processorEventJSON?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ProcessorEvent';
  }

  /**
   * Get property definitions for ProcessorEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasProcessorEventTypeURI',
        tsPropertyName: 'processorEventTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasProcessorEventJSON',
        tsPropertyName: 'processorEventJSON',
        type: 'string',
        required: false
      }
    ];
  }


}
